export type WorkTag =
  | typeof FunctionComponent
  | typeof HostRoot
  | typeof HostComponent
  | typeof HostText;

export const FunctionComponent = 0;
// only one root
export const HostRoot = 3;
// Native <div>
export const HostComponent = 5; 
// <div>123</div> 123
export const HostText = 6;
