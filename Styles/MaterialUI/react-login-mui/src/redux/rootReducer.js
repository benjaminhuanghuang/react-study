import { combineReducers } from 'redux'
// reducers
import authReducer from './auth/authReducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

export default rootReducer