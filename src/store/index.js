import { createStore, combineReducers ,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { tweetsReducer } from './ducks/tweets'

const store = createStore(combineReducers({
  tweets: tweetsReducer
}), applyMiddleware(thunkMiddleware))

export default store
