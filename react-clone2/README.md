#
https://github.com/Ankera/blog/blob/master/react/base.md

## react 管理着三个东西
- Root 整个应用的根，一个对象，有个属性指向 current 树，有另一个属性执行 workInProgress
- Current tree（保存当前状态）, 每个node都是一个fiber ，对应一个jsx node
- workInProgress tree（保存新状态） 每个node都是一个fiber ，对应一个jsx node


## react 虚拟DOM渲染到页面的两个主要阶段
- render 阶段
a、为每个节点创建新的fiber(workInProgress)，生成一颗有新状态的 workInProgress 树；
b、初次渲染的时候(或新创建了某个子节点的时候)会将这个 fiber 创建的真实的DOM实例，并且对当前节点的子节点进行插入；
c、如果不是初次渲染的话，就对比新旧的fiber的状态，将产生了更新的fiber节点，最终通过链表的形式挂载到 RootFiber 上。

- commit 阶段，真正操作页面的阶段
a、执行生命周期
b、会将 RootFiber 上获取到那条链表，根据链表上的标识来操作页面
 