## Setup
```
  npm i -D enzyme
  npm i -D enzyme-adapter-react-16
```

## Enzyme Render
Enzyme提供来三种渲染组件的方法
- shallow 方法就是官方的shallow rendering的封装。用于分析HTML结构，所以无法用于交互测试。真正的单元测试 (隔离，子组件不会渲染)

- render 返回的为对象，用于分析HTML结构，所以无法用于交互测试。仅调用render，但渲染所有子组件。

- mount方法用于将React组件加载为真实DOM节点。可用于交互测试。测试 componentDidMount 和 componentDidUpdate 的唯一方式。会渲染包括子组件在内的所有组

render doesn't have simulate - only shallow and mount do.

## enzyme API
 - get(index)：返回指定位置的子组件的DOM节点
 - at(index)：返回指定位置的子组件
 - first()：返回第一个子组件
 - last()：返回最后一个子组件
 - type()：返回当前组件的类型
 - text()：返回当前组件的文本内容
 - html()：返回当前组件的HTML代码形式
 - props()：返回根组件的所有属性
 - prop(key)：返回根组件的指定属性
 - state([key])：返回根组件的状态
 - setState(nextState)：设置根组件的状态
 - setProps(nextProps)：设置根组件的属性