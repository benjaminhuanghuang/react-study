
JavaScript引擎和页面渲染引擎两个线程是互斥的，当其中一个线程执行时，另一个线程只能挂起等待

如果 JavaScript 线程长时间地占用了主线程，那么渲染层面的更新就不得不长时间地等待，界面长时间不更新，会导致页面响应度变差，用户可能会感觉到卡顿
而这也正是 React 15 的 Stack Reconciler所面临的问题，当 React在渲染组件时，从开始到渲染完成整个过程是一气呵成的，无法中断

如果组件较大，那么js线程会一直执行，然后等到整棵VDOM树计算完成后，才会交给渲染的线程，这就会导致一些用户交互、动画等任务无法立即得到处理，导致卡顿的情况




从v15到v16，React团队花了两年时间将源码架构中的Stack Reconciler重构为Fiber Reconciler。


React16架构可以分为三层：
- Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler；
- Reconciler（协调器）—— 负责找出变化的组件：更新工作从递归变成了可以中断的循环过程。Reconciler内部采用了Fiber的架构；
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上。

从架构角度来看，Fiber 是对 React核心算法（即调和过程）的重写

从编码角度来看，Fiber是 React内部所定义的一种数据结构，它是 Fiber树结构的节点单位，也就是 React 16 新架构下的虚拟DOM

一个 fiber就是一个 JavaScript对象，包含了元素的信息、该元素的更新操作队列、类型，其数据结构如下：


## Fiber

React Fiber is a completely backward-compatible rewrite of the old reconciler. 
This new reconciliation algorithm from React is called `Fiber Reconciler`. 

Fiber 数据结构 + 新算法 = fiber架构


## Reconciliation
Reconciliation is the `algorithm for diffing two DOM trees`. When the UI renders for the first time, React creates a tree of nodes. Every individual node represents the React element. It creates a virtual tree (which is known as virtualDOM) that’s a copy of the rendered DOM tree. After any update from the UI, it recursively compares every tree node from two trees. The cumulative changes are then passed to the renderer.