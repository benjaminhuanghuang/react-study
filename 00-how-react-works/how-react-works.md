- How Does React Actually Work? React.js Deep Dive #1
  - https://www.youtube.com/watch?v=7YhdqIR2Yzo&ab_channel=PhilipFabianek

- ReactJS Reconciliation
  - https://www.geeksforgeeks.org/reactjs-reconciliation/


1. The JSX get converted to React.createElement function calls
That is way we always import React when juse JSX
```
  const App = () => (
    <div> App component </div>
  )
```

is converted to 
```
  // the paraments are: type, props, children
  const App = ()=> React.createElement('div', null, 'App component')
```

2.  React.createElement() returns a javascript object
```
// console.log(App)
{
  "$$typeof": Symbol(react.element),
  key: null,
  props: { children: "App component"},
  ref: null
  type: "div"
}
```

3. Reconciliation
Reconciliation is the process through which React updates the Browser DOM.

4. diff algorithm


5. Rendering
```
  ReactDOM.render(<App/>, document.getElementById('root'))
```
