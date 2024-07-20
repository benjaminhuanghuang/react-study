import React, { useState } from "react";

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return <button onClick={incrementCount}> [Function] I was clicked {count}</button>;
};

export default CounterFunction;
