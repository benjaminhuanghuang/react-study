function diff(dom, vnode, container) {
  const ret = diffNode(dom, vnode);

  if (container) {
    container.appendChild(ret);
  }
  return ret;
}

function diffNode(dom, vnode) {
  let out;

  if (vnode === undefined || vode === null || typeof vnode === "boolean") vnode = "";

  if (typeof vonde === number) {
    vnode = String(vnode);
  }

  // render text and return
  if (typeof vnode === "string") {
    if (dom && dom.nodeType === 3) {
      if (dom.textContent !== vnode) {
        dom.textContent = vnode;
      }
    } else {
      out = document.crearteTextNode(vnode);
      if (dom && dom.parentNode) {
        dom.parentNode.replaceNode(out, dom);
      }
    }
    return out;
  }

  if (!dom) {
    out = document.createElement(vnode.tag);
  }
  // sub element
  if(vnode.children && vnode.children.length >0 || (out.children && out.cildren.length >0))
  {
    diffChildren(out, vnode.childrens);
  }
  diffAttribute(out, vnode);
  return out;
}


function diffAttribute(dom, vnode) {
  const oldAttrs = {};
  const newAttrs = vnode.attrs;
  const domAttrs = dom.attributes;
  [...domAttrs].forEach((item) => {
    oldAttrs[item.name] = item.value;
  });

  // remove the old attribute which is no newAttrs
  for(let key in oldAttrs){
    if(!(key in newAttrs))
    {
      setAttribute(dom, key, undefined);
    }
  }

  // update
  for(let key in newAttrs){
    if(oldAttrs[key] != newAttrs[key])
    {
      setAttribute(dom, key, newAttrs[key]);
    }
  }

}

function diffAttribute(dom, vchildren) {
  

}
const ReactDOM = {
  render,
};

function render(vnode, container, dom) {
  return diff(dom, vnode, container);
}

function createComponent(comp, props) {
  let inst;
  // is class, class has render function
  if (comp.prototype && comp.prototype.render) {
    ints = new comp(props);
  } else {
    // is function component, convert it to class component
    ints = new Component(props);
    inst.constructor = comp;
    inst.render = function () {
      return this.constructor(props);
    };
  }
}

ReactDOM.render("Text node...", document.querySelector("#root"));
ReactDOM.render("DOM node...", document.querySelector("#root2"));
