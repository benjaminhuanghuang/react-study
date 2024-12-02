# useRef
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

It’s handy for keeping any mutable value around similar to how you’d use **instance fields in classes.**


## Usage
- set focus for editor
```
funciton App() {
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    }, []);

    return (
        <input ref={inputRef} type="text">
    )
}
```

- 