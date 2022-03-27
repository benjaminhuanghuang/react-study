import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
}

export const App = () => {
  // useReducer(reducer function, initState)
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: "INC" })}>increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>decrement</button>
    </div>
  );
};
