import React, { useState, useEffect } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  /*
    []: function in useEffect will be executed when first mount
    without the scecond parameter [], function in useEffect will be executed every time when count is changed
    using the scecond parameter [count2], function in useEffect will be executed when count2 is changed
  */
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count]);

  return (
    <div>
      <button onClick={() => {setCount(count + 1)} }>+</button>
      <div>Count:{count}</div>
    </div>
  );
};
