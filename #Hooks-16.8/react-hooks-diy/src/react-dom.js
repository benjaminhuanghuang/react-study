import { TAG_ROOT } from "./constants";
import { scheduleRoot } from "./scheduler";

function render(element, container) {

  let rootFiber = {
    tag: TAG_ROOT,
    stateNode: container,
    props: {
      children: [element], // element is virtual DOM
    },
  };
  scheduleRoot(rootFiber);
}

const ReactDOM = {
  render,
};

export default ReactDOM;
