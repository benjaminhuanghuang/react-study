# React rendering

## VDOM

Reconcile : compare VDOM (Diff algorithm),  and sync the VDOM with real DOM


## Fiber
Fiber is a unit of work, one component can have 1 or more than 1 fiber

current: Old fiber

workInProgress: new fiber

Types of fiber
https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js
```js
export type Fiber = {
    ...
}
```

https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactWorkTags.js
```js
export type WorkTag = 
```

## Debug Fiber


## createRoot
https://github.com/facebook/react/blob/main/packages/react-dom/src/client/ReactDOMRoot.js
```js
export function createRoot() 
```