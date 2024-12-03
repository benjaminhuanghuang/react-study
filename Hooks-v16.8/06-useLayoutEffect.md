# useLayoutEffect




## useEffect vs useLayoutEffect

The difference between useEffect and useLayoutEffect in React mainly comes down to timing of when they are invoked and how they affect rendering.

1. useEffect
When it's called: It's executed `after the render is committed to the screen`. React first paints the UI, then runs the useEffect function.

Use case: It’s perfect for side effects that don’t directly affect the UI layout, like fetching data, subscriptions, and logging.

Performance: Since it runs after the paint, it won’t block the browser from updating the UI, which ensures a smoother user experience.

```js
useEffect(() => {
  console.log("This runs after the component renders");
}, []);
```

2. useLayoutEffect
When it's called: It's invoked before the browser paints the screen, right after the DOM has been mutated but before the paint.

Use case: It’s typically used for synchronizing the layout or performing DOM measurements. If you need to change a layout or make measurements based on DOM elements, this is the hook to use. Any visual changes done here are applied before the paint, so the user doesn’t see an unstyled or incorrect layout flicker.

Performance: Since useLayoutEffect blocks the paint until it finishes, it can potentially affect performance if it takes too long to execute, causing slower rendering.

```js
useLayoutEffect(() => {
  console.log("This runs before the browser paints the screen");
}, []);
```
