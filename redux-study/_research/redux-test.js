import { createStore } from 'redux'

const initialState = {
  posts: []
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_POST') {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    })
  }
  return state
}

const store = createStore(reducer);
// Print store
// Print store
console.log("init store: ")
console.log(store.getState());

/*
    Change state
*/
const action_add_post = {
  type: 'ADD_POST',
  payload: {
    id: 1,
    title: 'How to Use Redux'
  }
}
store.dispatch(action_add_post)
console.log("store after dispatch: ")
console.log(store.getState());
