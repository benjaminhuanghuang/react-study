import React, { useRef } from "react";

export const App = () => {
  /*
  useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
  */
  const renders = useRef(0)
  
  console.log("hello renders", renders.current++)
  return (
    <div>
     Hello
    </div>
  );
};
