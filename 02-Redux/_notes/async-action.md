# Sync Actions
As soon as an action was dispateched, the state was immediately updated.
```
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}
```

# Async Actions
Fetche data from API and store it in redux store.

The action creator return a function
```
export const fetchUsers = () => {
  return (dispatch) => {
    // set load to true
    dispatch(fetchUsersRequest());
    
    // call api
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
```
 
## State for async action
```
  state = {
    loading: true,
    data: [],
    error: ''
  }
```

## Actions
- FETCH
- FETCH_SUCCESS
- FETCH_FAILURE

## Reducer
- FETCH : set loading to true
- FETCH_SUCCESS: set loading to false and set data
- FETCH_FAILURE: set loading to false and set error


## Setup
```

```

## Test & debug

```
nmp i sinon node-fetch fetch-mock
```
Fack the dispatch method


```
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store

```