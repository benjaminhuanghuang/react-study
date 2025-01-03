import { createWorkInProgress, FiberNode, FiberRootNode } from './fiber';
import {HostRoot} from './workTags';

let workInProgress: FiberNode | null = null;

function prepareFreshStack(root: FiberRootNode) {
    workInProgress = createWorkInProgress(root.current, {});
}


export function scheduleUpdateOnFiber(fiber: FiberNode) {
    const root = markUpdateFromFiberToRoot(fiber);
    renderRoot(root);
}

function markUpdateFromFiberToRoot(fiber: FiberNode) {
    let node = fiber;
    let parent = node.return;

    while(parent) {
        node= parent;
        parent = node.return;
    }
    if(node.tag === HostRoot) {
        return node.stateNode;
    }

    return null;
}

function renderRoot(root: FiberRootNode) {
    prepareFreshStack(root);

    do {
        try {
            workLoop();
            break;
        }catch (e) {
            workInProgress = null;
        }
    }while(true);

    const finishedWork = root.current.alternate;
    root.finishedWork = finishedWork;

    // wip fiberNode tree
    commitRoot(root);
}

function commitRoot(root: FiberRootNode) {
    const finishedWork = root.finishedWork;
    commitWork(finishedWork);
}


function workLoop() {
    while(workInProgress !== null) {
        performUnitOfWork(workInProgress);
    }
}

function performUnitOfWork(fiber: FiberNode) {
    const next = beginWork(fiber);
    fiber.memoizedProps = fiber.pendingProps;

    if(next === null) {
        completeUnitOfWork(fiber);
    } else {
        workInProgress = next;
    }

}

function completeUnitOfWork(fiber: FiberNode) {
    let node = fiber;
    do {
        completeWork(node);
    }
}