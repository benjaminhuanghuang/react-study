import React, { useState, useEffect } from "react";

const UseEffectFireDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log("Component render");
  /*
    []: function in useEffect will be executed when first mount

    without the scecond parameter [], function in useEffect will be executed every time when count is changed

    using the scecond parameter [count2], function in useEffect will be executed when count2 is changed
  */

  useEffect(() => {
    console.log("useEffect without condition -- when component rerender ");
  });

  useEffect(() => {
    // when first mount
    console.log("useEffect without empty condition -- when first mount");
  }, []);

  useEffect(() => {
    console.log("useEffect with [count2] -- when count2 changes");
  }, [count2]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count++
      </button>
      <div>Count:{count}</div>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        count2++
      </button>
      <div>Count2:{count2}</div>
    </div>
  );
};

export default UseEffectFireDemo;
