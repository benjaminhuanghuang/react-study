export type WorkTag =
  | typeof FunctionComponent
  | typeof HostRoot
  | typeof HostComponent
  | typeof HostText;

export const FunctionComponent = 0;
// only one root
export const HostRoot = 3;
export const HostComponent = 5; // Native div, span
export const HostText = 6;
