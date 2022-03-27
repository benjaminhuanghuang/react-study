import { TAG_ROOT, TAG_HOST, TAG_TEXT, ELEMENT_TEXT, PLACEMENT, UPDATE, TAG_CLASS, TAG_FUNCTION } from "./constants";
import { Update, UpdateQueue } from "./UpdateQueue";
import { setProps } from "./utils";



let nextUnitOfWork = null;
let workInProgressRoot = null; // 正在渲染的 RootFiber
let currentRoot = null; // 渲染成功后的current rootFiber
let deletions = []; // 删除的节点不放在effect list

// for hooks
let workInProgressFiber = null;
let hookIndex = 0;


/*
  1. diff=render, update or create, can be interupted
  根据virtual DOM生成fiber
  收集effectlist,知道哪些node更新了，哪些node删除了
  
  2. commit， 这个阶段不能暂停
*/
export function scheduleRoot(rootFiber) {
  // doule buffer.
  if (currentRoot && currentRoot.alternate) {
    // 第二次以后的更新
    workInProgressRoot = currentRoot.alternate;
    workInProgressRoot.alternate = currentRoot;
    if (rootFiber) {
      workInProgressRoot = rootFiber.props;
    }
  } else if (currentRoot) {
    if (rootFiber) {
      // 至少渲染过一次, 第一次update
      rootFiber.alternate = currentRoot;
      workInProgressRoot = rootFiber;
    } else {
      workInProgressRoot = {
        ...currentRoot,
        alternate: currentRoot,
      };
    }
  } else {
    // first time render
    workInProgressRoot = rootFiber;
  }
  workInProgressRoot.firstEffect = workInProgressRoot.lastEffect = workInProgressRoot.nexeEffect = null;
  nextUnitOfWork = workInProgressRoot;
}

//  循环执行 nextUnitwork, dealine is passed by browser
function workLoop(deadline) {
  let shouldYield; // 是否让出时间片
  while (!shouldYield && nextUnitOfWork) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1; // 没时间就交出控制权
  }
  if (!nextUnitOfWork && workInProgressRoot) {
    console.log("render is done");
    // console.log(Date.now() - start);
    // start = Date.now();
    commitRoot();
  }
  // 每帧执行一次，不管有没有任务
  requestIdleCallback(workLoop, { time: 500 });
}

// child -> sibling -> return
function performUnitOfWork(currentFiber) {
  beginWork(currentFiber);
  if (currentFiber.child) {
    return currentFiber.child;
  }
  while (currentFiber) {
    completeUnitOfWork(currentFiber);
    if (currentFiber.sibling) {
      return currentFiber.sibling;
    }
    currentFiber = currentFiber.return;
  }
}

/* 
  1. Crearte DOM
  2. Create sub-fiber
*/
function beginWork(currentFiber) {
  if (currentFiber.tag === TAG_ROOT) {
    updateHostRoot(currentFiber);
  } else if (currentFiber.tag === TAG_TEXT) {
    updateHostText(currentFiber);
  } else if (currentFiber.tag === TAG_HOST) {
    // DOM
    updateHost(currentFiber);
  } else if (currentFiber.tag === TAG_CLASS) {
    updateClassComponent(currentFiber);
  } else if (currentFiber.tag === TAG_FUNCTION) {
    updateFunctionComponent(currentFiber);
  }
}
/*
  收集有副作用的fiber，effect list
  every fiber has two attributs: firstEffect and lastEffect
  中间是一个list， nextEffect
*/
function completeUnitOfWork(currentFiber) {
  let returnFiber = currentFiber.return;
  if (returnFiber) {
    // connect effect of child
    if (!returnFiber.firstEffect) {
      returnFiber.firstEffect = currentFiber.firstEffect;
    }
    if (currentFiber.lastEffect) {
      if (returnFiber.lastEffect) {
        returnFiber.lastEffect.nextEffect = currentFiber.firstEffect;
      }
      returnFiber.lastEffect = currentFiber.lastEffect;
    }
    // connect effect of currentFiber to retrunFiber
    const effectTag = currentFiber.effectTag;
    if (effectTag) {
      // has effect
      if (returnFiber.lastEffect) {
        returnFiber.lastEffect.nextEffect = currentFiber;
      } else {
        returnFiber.firstEffect = currentFiber;
      } 
      returnFiber.lastEffect = currentFiber;
    }
  }
}

function updateHostRoot(currentFiber) {
  // 先处理自己， Root不用创建DOM，Root对应的DOM就是container
  let newChildren = currentFiber.props.children;
  reconcileChildren(currentFiber, newChildren);
}

function updateHostText(currentFiber) {
  if (!currentFiber.stateNode) {
    // this fiber does not create DOM
    currentFiber.stateNode = createDOM(currentFiber);
  }
}

function updateHost(currentFiber) {
  if (!currentFiber.stateNode) {
    currentFiber.stateNode = createDOM(currentFiber);
  }

  // create fiber
  const newChildren = currentFiber.props.children;
  reconcileChildren(currentFiber, newChildren);
}

function updateClassComponent(currentFiber) {
  if (!currentFiber.stateNode) {
    // class compoent's stateNode is the instance
    currentFiber.stateNode = new currentFiber.type(currentFiber.props);
    currentFiber.stateNode.internalFiber = currentFiber;
    currentFiber.updateQueue = new UpdateQueue();
  }
  currentFiber.stateNode.state = currentFiber.updateQueue.forceUpdate(currentFiber.stateNode.state);
  let newElement = currentFiber.stateNode.render();
  const newChildren = [newElement];
  reconcileChildren(currentFiber, newChildren);
}

function updateFunctionComponent(currentFiber) {
  // hooks
  workInProgressFiber = currentFiber;
  hookIndex = 0;
  workInProgressFiber.hooks = [];

  const newChildren = currentFiber.type(currentFiber.props);
  reconcileChildren(currentFiber, newChildren);
}

function createDOM(currentFiber) {
  if (currentFiber.tag === TAG_TEXT) {
    return document.createTextNode(currentFiber.props.text);
  } else if (currentFiber.tag === TAG_HOST) {
    // span, div
    let stateNode = document.createElement(currentFiber.type);
    updateDOM(stateNode, {}, currentFiber.props);
    return stateNode;
  }
}

function updateDOM(stateNode, oldProps, newProps) {
  if (stateNode && stateNode.setAttribute) {
    setProps(stateNode, oldProps, newProps);
  }
}
/*
newChildren is array of virtual DOM

Convert virutal DOM to Fiber
*/
function reconcileChildren(currentFiber, newChildren) {
  let newChildIndex = 0;
  let prevSibling;
  let oldFiber = currentFiber.alternate && currentFiber.alternate.child;
  if (oldFiber) {
    oldFiber.firstEffect = oldFiber.lastEffect = oldFiber.nextEffect = null;
  }
  // 遍历子virtual DOM，为每个virtual DOM生成 fiber
  while (newChildIndex < newChildren.length || oldFiber) {
    let newChild = newChildren[newChildIndex]; //virtual DOM
    let newFiber;

    const sameType = oldFiber && newChild && newFiber.type === newChild.type;
    let tag;
    if (newChild && typeof newChild.type === "function" && newChild.type.prototype.isReactComponent) {
      tag = TAG_CLASS;
    } else if (newChild && typeof newChild.type == "function") {
      tag = TAG_FUNCTION;
    } else if (newChild && newChild.type == ELEMENT_TEXT) {
      tag = TAG_TEXT;
    } else if (newChild && typeof newChild.type === "string") {
      // is DOM node like div, span
      tag = TAG_HOST;
    }
    if (sameType) {
      // just update old DOM, no need to create a new one
      if (oldFiber.alternate) {
        // 至少更新过一次, reuse 上上次fiber
        newFiber = oldFiber.alternate;
        newFiber.props = newChild.props;
        newFiber.alternate = oldFiber;
        newFiber.effectTag = UPDATE;
        newFiber.nexeEffect = null;
        newFiber.updateQueue = oldFiber.updateQueue || new UpdateQueue();
      } else {
        newFiber = {
          tag: oldFiber.tag,
          type: newChild.type,
          props: newChild.props,
          stateNode: oldFiber.stateNode, // reuse
          return: currentFiber,
          alternate: oldFiber,
          updateQueue: oldFiber.updateQueue || new UpdateQueue(),
          effectTag: UPDATE, // Upate node, render 阶段，收集副作用
          nextEffect: null, // effectlist
        };
      }
    } else {
      newFiber = {
        tag,
        type: newChild.type,
        props: newChild.props,
        stateNode: null,
        return: currentFiber,
        updateQueue: new UpdateQueue(),
        effectTag: PLACEMENT, // render 阶段，收集副作用
        nextEffect: null, // effectlist
      };
    }
    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }
    if (newFiber) {
      if (newChildIndex == 0) {
        // this is the first fiber
        currentFiber.child = newFiber;
      } else {
        prevSibling.sibling = newFiber;
      }
      prevSibling = newFiber;
    }
    newChildIndex++;
  }
}

function commitRoot() {
  // delete node before process effect list
  deletions.forEach(commitWork);
  let currentFiber = workInProgressRoot.firstEffect;
  while (currentFiber) {
    console.log("commitRoot", currentFiber);
    commitWork(currentFiber);
    currentFiber = currentFiber.nextEffect;
  }
  deletions.length = 0;

  currentRoot = workInProgressRoot;
  workInProgressRoot = null;
}

function commitWork(currentFiber) {
  if (!currentFiber) {
    return;
  }
  let returnFiber = currentFiber.return;
  while (returnFiber.tag !== TAG_HOST && returnFiber.tag !== TAG_ROOT && returnFiber.tag !== TAG_TEXT) {
    returnFiber = returnFiber.return;
  }
  let domReturn = returnFiber.stateNode;
  if (currentFiber.effectTag === PLACEMENT) {
    //  add new
    let nextFiber = currentFiber;
    if (nextFiber.tag === TAG_CLASS) {
      return;
    }
    // if node is not DOM or text, find DOM or text in it's desendant
    while (nextFiber.tag !== TAG_HOST && nextFiber.tag !== TAG_TEXT) {
      nextFiber = nextFiber.child;
    }
    domReturn.appendChild(nextFiber.stateNode);
  } else if (currentFiber.effectTag == DELECTON) {
    return commitDeletion(currentFiber, domReturn);
  } else if (currentFiber.effectTag == UNDATE) {
    if (currentFiber.type === ELEMENT_TEXT) {
      if (currentFiber.alternate.props.text !== currentFiber.prop.text) {
        currentFiber.stateNode.textContent = currentFiber.prop.text;
      } else {
        updateDOM(currentFiber.stateNode, currentFiber.alternate.props, currentFiber.props);
      }
    }
  }
  currentFiber.effectTag = null;
}

function commitDeletion(currentFiber, domReturn) {
  // if node is not DOM or text, find DOM or text in it's desendant
  if (currentFiber.tag === TAG_HOST && currentFiber.tag === TAG_TEXT) {
    domReturn.removeChild(currentFiber.stateNode);
  } else {
    // delete in descendant
    commitDeletion(currentFiber.child, domReturn);
  }
}

export function useReducer(reducer, initialValue) {
  let oldHook =
    workInProgressFiber.alternate &&
    workInProgressFiber.alternate.hooks &&
    workInProgressFiber.alternate.hooks[hookIndex];

  if (newHook) {
    // second time
    newHook.state = newHook.updateQueue.forceUpdate(newHook.state);
  } else {
    nowHook = {
      state: initialValue,
      updateQueue: new UpdateQueue(),
    };
  }

  const dispatch = (action) => {
    let payload = reducer ? reducer(newHook.state, action) : action;
    newHook.updateQueue.enqueueUpdate(new Update(payload));
    scheduleRoot();
  };

  workInProgressFiber.hooks[hookIndex++] = newHook;
  return [newHook.state, dispatch];
}

export function useState(initialValue) {
  return useReducer(null, initialValue);
}

// ask browser to execute a task when it is idel
requestIdleCallback(workLoop, { time: 500 });
