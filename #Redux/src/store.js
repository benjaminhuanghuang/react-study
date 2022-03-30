import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
// redux persist
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// devtools for middleware like thunk
import { composeWithDevTools } from 'redux-devtools-extension';
//
import {todos} from './pages/todos/reducers'

const reducers ={
  todos
}

const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(
      persistedReducer,
      composeWithDevTools(
          applyMiddleware(thunk)
      )
  );