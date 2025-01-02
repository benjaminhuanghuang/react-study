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
    
}