import React, { useEffect } from "react";

export const Hello = () => {
  /*
    useEffect returns a function for cleanup
  */
  useEffect(() => {
    console.log("render");

    return ()=>{
      console.log("unmount");
    }
  }, []);

  return (
    <div>
      Hello
    </div>
  );
};
