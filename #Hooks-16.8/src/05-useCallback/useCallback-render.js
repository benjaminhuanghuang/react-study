import React, { useState, useCallback, memo } from "react";
import { useCountRenders } from "./useCountRenders";

export const App = () => {
  const [count, setCount] = useState(0);

  /*
    Prevent function from being created on every single render
  */

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, [setCount]);

  return (
    <div>
      <Hello increment={increment}></Hello>
      <Hello increment={() => setCount(count + 1)}></Hello>   {/* Creat new function on very render, cause Hello re-render*/}
      <div>Count: {count}</div>
    </div>
  );
};

const Hello = memo(({increment}) => {
  useCountRenders();
  return <button onClick={increment}>Hello</button>;
});
