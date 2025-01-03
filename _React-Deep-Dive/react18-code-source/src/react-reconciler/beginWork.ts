import { ReactElementType } from "@/shared/ReactTypes";
import {mountChildFiber, reconcileChildFiber} from "./childFiber";
import { FiberNode } from "./fiber";
import { processUpdateQueue, UpdateQueue } from "./updateQueue";
import {
    FunctionComponent,
    HostComponent,
    HostRoot,
    WorkTag
} from "./workTags";
import { renderWithHooks } from "./fiberHooks";


export const beginWork = (wip: FiberNode) => {
    switch(wip.tag) {
        case HostRoot:
            return updateHostRoot(wip);
        case HostComponent:
            return updateHostComponent(wip);
        case FunctionComponent:
            return updateFunctionComponent(wip);
        default:
            throw new Error('Unknown work tag');
    }
}
const updateFunctionComponent = (wip: FiberNode) => {
    const nextChildren = renderWithHooks(wip);
    reconcileChildFiber(wip, nextChildren);
    return wip.child;
 }

const updateHostRoot = (wip: FiberNode) => {
   const baseState = wip.memoizedState;
   const updateQueue = wip.updateQueue as UpdateQueue<Element>;
    const pending = updateQueue.shared.pending;
    updateQueue.shared.pending = null;
    const {memoizedState} = processUpdateQueue(baseState, pending);
    wip.memoizedState = memoizedState;
    const nextChildren = wip.memoizedState;
    reconcileChildFiber(wip, nextChildren);
    return wip.child;
}

const updateHostComponent = (wip: FiberNode) => {
    const nextProps = wip.pendingProps; 
    const nextChildren = nextProps.children;
    reconcileChildFiber(wip, nextChildren);

    return wip.child;
}


function reconcileChildren(wip: FiberNode, children?: ReactElementType) {
    const current = wip.alternate;
    if(current !== null) {
        wip.child = reconcileChildFiber(wip, current?.child, children);
    } else {
        // mount
        wip.child = mountChildFiber(wip, null, children);
    }
}
