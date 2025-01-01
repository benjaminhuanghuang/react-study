# useReducer

```js
const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
    switch(action.type) {
        case '':
            return {
                ...state,
                count: state.count - 1;
            }
    }
}


<button onClick={()=>dispatch({type: 'add'})}>

```