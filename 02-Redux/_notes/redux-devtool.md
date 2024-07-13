## Redux DevTools

1. Install the Redux DevTools extension
Redux DevTools is a browser extension that allows you to view your Redux store's state at any particular time


2. Connect Redux application to the Redux DevTools
```
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```

3. Play the redux store, dispath action in Chrome


## Reference
- [React Redux Tutorial for Beginners: Simply Explained](https://chriscourses.com/blog/redux)