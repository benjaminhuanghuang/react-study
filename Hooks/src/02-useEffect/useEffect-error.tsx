import React, { useState, useEffect } from "react";

export const App = () => {
  const [value, setValue] = useState(0);

  if (value > 0) {
    /*
      Error! React Hooks must be called in the exact same order in every component
    */
    useEffect(() => {
      console.log("mount 1");
    }, []);
  }
  return <div>Effect in order</div>;
};
