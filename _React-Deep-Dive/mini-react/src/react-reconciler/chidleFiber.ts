import { REACT_ELEMENT_TYPE } from "@/shared/ReactSymbols";
import { ReactElementType } from "@/shared/ReactTypes";
import { createFiberFromElement, FiberNode } from "./fiber";
import { Placement } from "./fiberFlags";
import { HostText } from "./workTags";

function ChildReconciler(shouldTrackEffects: boolean) {
  function reconcileSingleElement(
    returnFiber: FiberNode,
    currentFiber: FiberNode | null,
    element: ReactElementType
  ) {
    const fiber = createFiberFromElement(element);
    fiber.return = returnFiber;

    return fiber;
  }

  function reconcileSingleTextNode(
    returnFiber: FiberNode,
    currentFiber: FiberNode | null,
    content: string | number
  ) {
    const fiber = new FiberNode(HostText, { content }, null);
    fiber.return = returnFiber;
    return fiber;
  }

  function placeSingleChild(fiber: FiberNode) {
    if(shouldTrackEffects && fiber.alternate === null) {
        fiber.flags |= Placement;
    }
    return fiber;
  }

  return function reconcileChildFiber(
    returnFiber: FiberNode,
    currentFiber: FiberNode | null,
    newChild?: ReactElementType
  ) {
    if(typeof newChild === 'object' && newChild != null) {
        switch(newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
                return placeSingleChild(
                    reconcileSingleElement(returnFiber, currentFiber, newChild)
                );
            default:
                console.warn("not support reconcile type", newChild);
        }
    }
    if(typeof newChild == 'string' || typeof newChild === 'number') {
        return placeSingleChild(
            reconcileSingleTextNode(returnFiber, currentFiber, newChild)
        );
    }
    console.warn("not support reconcile type", newChild);
    return null;
  }
}

export const reconcileChildFibers = ChildReconciler(true);
export const mountChildFibers = ChildReconciler(false);
