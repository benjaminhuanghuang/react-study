- How Does React State Actually Work? React.js Deep Dive #4
  - https://www.youtube.com/watch?v=2cSijEC_m7g&ab_channel=PhilipFabianek


```
const instance = new Component();
instance.updater = ReactDomUpdater;



setStatee(...args) {
  this.updater.enqueueSetState(this. ...args);
}
```
In hooks
```
  useState(initialState){
     return React.__currentDispatcher.useState(initialState)
  }
```

When we call `setState`, React add the passed data to a `queue`, 
The updates a handled one by one, but the changes are all applied at the same time.
1. render phase, calcuates the new sate
2. commit, synchronous
