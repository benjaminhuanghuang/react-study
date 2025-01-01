# useRef

- used to reference a value that's not needed for rendering.
- used to operator Dom elements

```js
function Component() {
    const ref = useRef(initialVal);

    function handleClick() {
        ref.current++;
    }
}
```


```js
function Component() {
    const divReference = useRef();
    const inputReference = useRef();

    useEffect(()=>{
        const div = divReference.current;
    }, []);

    useEffect(()=>{
        inputReference.current.focus()
    }, []);

    <div ref={divReference}>
}
```