import { combineReducers } from 'redux'
// reducers
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'


const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

export default rootReducer