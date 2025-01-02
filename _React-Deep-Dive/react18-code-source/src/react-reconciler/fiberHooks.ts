import {FiberNode} from './fiber';

export function renderWithHooks(wip: FiberNode) {
    const Component = wip.type;
    const props = wip.pendingProgs;
    const children = Component(props);
    return children;
}