

## Setup
```
  npx create-react-app <my-proj>

  npm i redux react-redux
```


## create store and reducer
store/Reducer.js
```
const initialState = {
  message: "Hello"
}


const reducer = (state= initialState, action) =>{
  const newState = {...state} ;
  if(action.type === 'Change'){
    newState.message = 'New Value';
  }
  return newState;
}

export default reducer;
```

## index.js
wrapping entire application in a <Provider> component to make the store available throughout the component tree

```
// redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/Reducer";
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

## use store in component
```
```


