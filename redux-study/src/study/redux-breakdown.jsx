import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const initialState = { time: 0 };

const simpleReducer = (state, action) => {
  return { time: Date.now() };
};

const store = createStore(simpleReducer, initialState);

function App() {
  /*
    Get data from store
  */
  const state = store.getState();
  console.log("store.getState()", state);

  const handleClick = () => {
    /*
      Dispatch a action to Reducer
    */
    store.dispatch({ type: "CHANGE_TIME" });
  };

  return (
    <>
      <h1>This is data in store: {state.time}</h1>
      <button onClick={handleClick}>change state</button>
    </>
  );
}
const render = () => ReactDOM.render(<App />, document.getElementById("root"));

render();

/*
store.subscribe() is a low-level redux api, and whatever function is passed into it is invoked 
whenever the store has changes made to the state object.
*/
store.subscribe(render);
