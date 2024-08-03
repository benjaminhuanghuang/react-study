# Understanding React's UI Rendering Process
https://www.youtube.com/watch?v=i793Qm6kv3U

## HTML & The DOM
```js
const root = document.getElementById('title');
root.innerHtml = 'Hello';

<h1 id="title">Hello</h1>
```

## Components & Element
```js
const MyComponent = () =>{
    return (
        <main>
            <h1 id="title">Hello</h1>
        </main>
    );
}
```

```js
type: "main",
key: null,
ref: null,
"$$typeof": Symbol(react.element),
    props: {
        children: {
        type: "h1",
        key: null,
        ref: null,
        props: {
            id: "title"
            children: "Look ma!"
    },
}}};
```

Shadow DOM: Is a browser technology, Focuses on encapsulating the style and behavior of web components, providing a scoped environment for CSS and JavaScript.

## Reconciliation
Responsible for maintaining the tree of elements when state change.
- type change
- Component element change
- Children

## Rendering


## Fiber
