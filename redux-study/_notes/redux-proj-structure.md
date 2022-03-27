




## Reference
-[Redux FAQ: Code Structure](https://redux.js.org/faq/code-structure)
-[Structure your React-Redux project for scalability and maintainability](https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7)



## React+Redux项目结构最佳实践
https://segmentfault.com/a/1190000010775697
- 按照类型
- 一个功能模块对应一个文件夹，这个功能所用到的container、component、action、reducer等文件，都存放在这个文件夹下
- Ducks 将相关联的reducer、action types和action写到一个文件里。本质上是以应用的状态作为模块的划分依据，而不是以界面功能作为划分模块的依据。这样，管理相同状态的依赖都在同一个文件中，不管哪个容器组件需要使用这部分状态，只需要在这个组件中引入这个状态对应的文件即可。

