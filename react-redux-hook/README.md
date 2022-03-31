# Redux + Hook


```
  import { useSelector, useDispatch } from 'react-redux';
  import { theAction } from '../redux'


  function Component () {
    const somthing = useSelector(state => state.something)
    const dispatch = useDispatch()
    
    return (
      <div>
        <h2>Number of cakes - {somthing} </h2>
        <button onClick={() => dispatch(theAction())}>Do thing</button>
      </div>
    )
  }

  export default Component
```