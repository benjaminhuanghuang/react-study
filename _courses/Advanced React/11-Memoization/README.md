# Memoization


```tsx

```

## useMemo and useCallback

```tsx
const Component = () => {
    const submit = useCallback( () => {/* some logic */), []);
    
    useEffect(() => {
        submit();
        
        // now that submit is memoized, this useEffect wont be triggered on every re-render
    }, [submit])
    return ...
}
```

The main difference between useCallback and useMemo is that useCallback takes the function you want to keep the same while useMemo takes a function and memoize its result.

This distinction slightly alters how they behave in react, despite each hook taking a function as its first argument.

## React.memo()
