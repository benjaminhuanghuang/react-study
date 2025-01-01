# useReducer

```js
import { useReducer } from 'react';

const reducer = (state, action) => {
    switch ( action.type ) {

    }
}

const [count, dispatch] = useState(reducer, initState);


<Button onClick={()=>dispatch({type:'increment', payload: 1})}>
```