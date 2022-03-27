Action creator的设计也是由Flux架构来的产物，它是一种辅助用的函数，用来创建Action的。

在Redux中的Action creator只用来返回Action对象而已，
```
export function addTodo(text) {
  return { type: ADD_TODO, text }
}
```

Action Creator 结合 Middleware 就可以变得非常灵活
