import { createContainer } from "./ReactFiberContainer";

function ReactDOMRoot(internalRoot) {
    this._internalRoot = internalRoot;
}

export function createRoot(container) {
  const root = createContainer(container);

  return new ReactDOMRoot(container);
}
