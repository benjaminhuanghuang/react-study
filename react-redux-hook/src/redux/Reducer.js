const initialState = {
  message: "Hello"
}


const reducer = (state= initialState, action) =>{
  const newState = {...state} ;
  if(action.type === 'Change'){
    newState.message = 'New Value';
  }


  return newState;
}


export default reducer;