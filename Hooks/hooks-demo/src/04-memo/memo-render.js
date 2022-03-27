import React, { useState, memo } from "react";


/*
  memo compare the props, re-render component when props changes
*/
const Hello = memo(({ increment }) => {
  return <button onClick={increment}></button>;
});

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hello increment={() => setCount(count + 1)}></Hello>
      <div>Count: {count}</div>
    </div>
  );
};
