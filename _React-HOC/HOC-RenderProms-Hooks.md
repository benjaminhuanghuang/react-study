# HOC / Render Props / Hooks
HOC / Render Props / Hooks 三种写法都可以提高代码的复用性，

HOC 是对传入的组件进行增强后，`返回新的组件`；
常见例子：React Redux 的 connect，将 Redux Store 和 React 组件联系起来。
```js
// react-redux connect 例子
const ConnectedMyComponent = connect(mapState)(MyComponent);

// HOC 
function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("Current props: ", this.props);
      console.log("Previous props: ", prevProps);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
```

Render Props 是指将一个返回 React 组件的函数，作为 prop 传给另一个 React 组件的共享代码的技术；

常见例子：React Router 中，自定义 render 函数，按需使用 routeProps 来渲染业务组件。
```
ReactDOM.render(
  <Router>
    <Route
      path="/home"
      render={(routeProps) => (
        <div>Customize HZFE's {routeProps.location.pathname}</div>
      )}
    />
  </Router>,
  node
);
```
Hooks 是 React 提供的一组 API，使开发者可以在不编写 class 的情况下使用 state 和其他 React 特性



hoc是 React 中用于重用组件逻辑的高级技术，它是一个函数，能够接受一个组件并返回一个新的组件。
实现高阶组件的两种方式：
属性代理。高阶组件通过包裹的React组件来操作props
反向继承。高阶组件继承于被包裹的React组件