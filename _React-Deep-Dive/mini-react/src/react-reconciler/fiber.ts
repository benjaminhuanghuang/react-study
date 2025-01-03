import { Props, Key, Ref, Type, ReactElementType } from "@/shared/ReactTypes";
import {FunctionComponent, HostComponent, WorkTag} from "./workTags";
import {Flags, NoFlags} from './fiberFlags';
import {Container} from '@/react-dom/hostConfig';


export class FiberNode {
    type: any;   // div, span, li...
    tag: WorkTag;

    pendingProps: Props;
    key: Key;

    // Real DOM
    stateNode: any;
    ref: Ref;

    return : FiberNode | null;
    child: FiberNode | null;
    sibling: FiberNode | null;
    index: number;

    // props after Update
    memoizedProps: Props| null;
    memoizedState: any;

    alternate: FiberNode | null;

    // Side effect
    flags: Flags;
    subtreeFlags: Flags;
    updateQueue: unknown;

    constructor(tag: WorkTag, pendingProps: Props, key: Key) {
        this.tag = tag;
        this.pendingProps = pendingProps;
        this.key = key;
        // Host component
        this.stateNode = null;
        // Function component
        this.type = null;

        // Tree structure
        this.return = null;
        this.sibling = null;
        this.child = null;
        this.index = 0;

        this.ref = null;

        //
        this.pendingProps = pendingProps;
        this.memoizedProps= null;
        this.memoizedState = null;
        this.alternate = null;

        // side effect
        this.flags = NoFlags;
        this.subtreeFlags = NoFlags;
    }
}

export class FiberRootNode {
    container: Container;
    current: FiberNode;
    finishedWork: FiberNode | null;

    constructor(container: Container, hostRootFiber: FiberNode) {
        this.container = container;
        this.current = hostRootFiber;
        hostRootFiber.stateNode = this;
        this.finishedWork = null;
    }
}

export const createWorkInProgress = (current: FiberNode, pendingProps: Props) : FiberNode => {
    let wip = current.alternate;
    if(wip === null) {
        // mount
        wip = new FiberNode(current.tag, pendingProps, current.key);    
        wip.stateNode = current.stateNode;
        wip.alternate = current;
        current.alternate = wip;
    }else {
        wip.pendingProps = pendingProps;
        wip.flags = NoFlags;
        wip.subtreeFlags = NoFlags;
    }
    wip.type = current.type;
    wip.updateQueue = current.updateQueue;
    wip.child = current.child;
    wip.memoizedProps = current.memoizedProps;
    wip.memoizedState = current.memoizedState;

    return wip;
}

export function createFiberFromElement(element: ReactElementType) : FiberNode { 
    const {type, key, props} = element;
    let fiberTag: WorkTag = FunctionComponent;
    if(typeof type === 'string') {
        fiberTag = HostComponent;
    } else if(typeof type !== 'function') {
        console.warn('Not support', element);
    }
    const fiber = new FiberNode(fiberTag, props, key);
    fiber.type = type;
    return fiber;
}