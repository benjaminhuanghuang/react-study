## What is Redux

Redux is a state management tool

## Store
state is a JavaScript object. State can tell certain parts of code to show or hide.
状态存储在store中

状态复杂时，状态中的不同内容将被保存为store对象的不同字段

store 通过 dispatch() 把action分派 reducer中。
```
  store.dispatch({type: 'INCREMENT'})
```

store.getState() 可用于读取store的状态


store的第三个重要方法是subscribe()，subscribe()接受一个回调函数为参数。这些回调函数在store状态改变时被调用
```
store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})
```
## Action and Action Builder

store的状态通过 actions改变。 Action 是对象，它至少有一个字段确定操作的类型。 例如
```
{
  type: 'INCREMENT'
}
```


Action 的调用者不需要知道任何关于 action 的内部表示，它只需要调用 creator-函数就可以获得正确的操作
```
const App = () => {
  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    store.dispatch(createNote(content))
    
  }
```

## Reducer
Action 对应用程序状态的影响是通过使用一个 reducer() 函数来定义的。
reducer 以当前状态和 action 为参数, 并返回一个新的状态。

```
  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      case 'ZERO':
        return 0
      default: // if none of the above matches, code comes here
      return state
    }
  }
```

Reducer 不能直接从应用程序中调用。 Reducer 只作为 createStore( )的参数




## Local state
React components typically have their own individual state which determines how they should display and function. This is known as local state.

## Managing State using prop
If a component is used inside of another component, it creates a nest##like structure. The embedded component is called a **child component**.

If the child component requires a state value that's already available in its **parent component**, the parent component can pass the value through to the child as a prop.

Now each time the parent component's state changes, the child component's prop will be changed as well.

The problems of this solution:
- Passing state down through more than two components makes all of the components rely on each other which isn't very scalable

- Using the same state through components that don't have a parent / child relationship is redundant and can require addition calls to a backend server




## The Redux Store
Redux places all of the components' state in one central location. This makes it accessible to all components without requiring a parent / child relationship. The central location in which we store the state is called a store.

I like thinking of the store as a **global JavaScript object** in which all of our components can access.

This JavaScript object is immutable, meaning it cannot be changed directly, but it can be cloned and replaced with its properties updated instead. This cloning gives us the ability to see how our app looks at particular point in time due to its state changes—quite useful for debugging purposes.

## Redux Reducers
A reducer is just a function that takes two arguments and returns your app's current state. 

The two arguments it takes are:
- Your current state (JavaScript object)
- An action (also a JavaScript object)

Reducer function it will be called a couple of times:
    ## Once on initialization (this sets our store's initial state)
    ## Every time an action is dispatched

In reducer method, DO NOT updating our state directly!. we want to create an updated clone so we can view exactly what our app looks like at certain states after actions are dispatched. 

## Redux Actions
Redux actions are JavaScript objects that contain two properties: type and payload. 
These actions are "dispatched," or used as arguments by the Redux store's dispatch API method.

type property of action describe how our app is updating its state
payload containing the data that we'd like to update our main state object.

To actually "call" this action, we need to use our store's dispatch method
When called, this will run the reducer function that we created earlier.
action is passed to reducer function as the second argument.


## State from Redux to React component
react-redux provides a component called **Provider** and a function called **connect**.

The Provider component wraps around React's root App component.

We can now access our state directly within components using react-redux's connect function.

The connect function takes another function as an argument: mapStateToProps. mapStateToProps determines what state from our store we want to pull into our component.

## Event from React component to Redux
creating a mapDispatchToProps function and passing it as the second argument to connect, we're making our store's dispatch method available for use within our component's this.props object.


## Presentational and Container Components
- https://redux.js.org/basics/usage-with-react

Presentational Components describe the look but don't know where the data comes from, or how to change it. 
They only render what's given to them. If you migrate from Redux to something else, you'll be able to keep all these components exactly the same. They have no dependency on Redux.



## Redux flow
![Redux flow](redux-flow.png)

## Reference 
- [Redux Basic Tutorial](https://redux.js.org/basics/basic-tutorial)

- [Example: Todo List](https://redux.js.org/basics/example/)

- [React Redux Tutorial for Beginners: Simply Explained](https://chriscourses.com/blog/redux)