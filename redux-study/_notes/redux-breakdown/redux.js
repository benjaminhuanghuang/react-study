function createStore(reducer, initState) {
  let state = initState;
  let listeners = [];

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listener.push(listener);
  }

  function unsubscripbe(listener) {
    const index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }


  return {dispatch, subscribe, getState};
}
