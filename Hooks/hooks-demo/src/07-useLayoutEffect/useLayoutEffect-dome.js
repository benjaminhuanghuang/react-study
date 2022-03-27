import React, { useRef, useLayoutEffect } from "react";

export const App = () => {
  const inputRef = useRef();

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

  return (
    <div>
      <input ref={inputRef} name="email"></input>
    </div>
  );
};
