import React from "./react";
import ReactDOM from "./react-dom";

function FunctionCount(props) {
  const [counterState, dispatch] = React.useReducer(reducer, { count: 0 });
  const [numberState, setNumberState] = React.useState({ number: 0 });
  return (
    <div>
      <div id="counter">
        <span>{numberState.count}</span>
        <button onClick={() => setNumberState({ number: numberState.number + 1 })}>+</button>
      </div>
      <div id="counter">
        <span>{counterState.count}</span>
        <button onClick={() => dispatch({ type: "ADD" })}>+</button>
      </div>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        count: state.count + 1,
      };
      break;
    default:
      return state;
  }
}

ReactDOM.render(<FunctionCount name="counter" />, document.getElementById("root"));
