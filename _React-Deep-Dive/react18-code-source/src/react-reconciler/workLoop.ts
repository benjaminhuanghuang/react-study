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



