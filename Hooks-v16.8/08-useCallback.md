# useCallback

In React, useCallback is a hook used to memoize a function. 
This means that React will remember the function and only recreate it when one of its dependencies changes

It's particularly useful when passing callback functions to child components, preventing unnecessary re-renders or expensive computations.

In this example, the handleClick function is memoized using useCallback. The function is only recreated when the count changes, which can improve performance if this component re-renders frequently or if handleClick is passed as a prop to a child component.
```ts
function MyComponent() {
  const [count, setCount] = useState(0);

  // Memoize the handleClick function
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```


```ts
const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(0);

<Child text='Button One' onClick={() -> setCount1(count1 + 1)} />
<Child text='Button Two'= onClick={() -> setCount2(count2 + 1)} />
```