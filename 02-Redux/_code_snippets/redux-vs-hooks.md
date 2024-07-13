
wrapping entire application in a <Provider> component to make the store available throughout the component tree

```
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```