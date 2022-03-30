# React controlled components and uncontrolled components
A Controlled Component is one that takes its current value through `props` and notifies changes through `callbacks` like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
```
const { useState } from 'react';

function Controlled () {
  const [email, setEmail] = useState();
  const handleInput = (e) => setEmail(e.target.value);
  
  return <input type="text" value={email} onChange={handleInput} />;
}
```

A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
```
  const { useRef } from 'react';

  function Example () {
    const inputRef = useRef(null);
    return <input type="text" defaultValue="bar" ref={inputRef} />
  }
```
