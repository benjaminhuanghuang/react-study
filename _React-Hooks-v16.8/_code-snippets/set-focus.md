


```js
  const userRef = useRef();
  const errRef = useRef();


  useEffect(() => {
      userRef.current.focus();
  }, [])



  <input type="text" id="username" ref={userRef}/>
```