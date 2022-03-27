## V16.3 之前生命周期分为三个阶段：

- 挂载阶段
- 组件更新阶段
- 卸载阶段

分开来讲：

挂载阶段
- constructor：避免将 props 的值复制给 state
- componentWillMount
- render：react 最重要的步骤，创建虚拟 dom，进行 diff 算法，更新 dom 树都在此进行
- componentDidMount

组件更新阶段
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

卸载阶段
- componentWillUnMount

## V16.3 之后
Fiber 本质上是一个虚拟的堆栈帧，新的调度器会按照优先级自由调度这些帧，从而将之前的同步渲染改成了异步渲染，在不影响体验的情况下去分段计算更新。

对于异步渲染，分为两阶段：

reconciliation：
- componentWillReceiveProps
- shouldConmponentUpdate
- componentWillUpdate

commit
- componentDidMount
- componentDidUpdate

即更新后的生命周期为：
- 挂载阶段
constructor
static getDerivedStateFromProps
render
componentDidMount

- 更新阶段
static getDerivedStateFromProps
shouldComponentUpdate
render
getSnapshotBeforeUpdate
componentDidUpdate

- 卸载阶段
componentWillUnmount
