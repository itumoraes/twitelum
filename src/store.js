import { createStore } from 'redux'

function tweetReducer(state = [], action = {}) {
  if (action.type === 'CARREGA_TWEETS') {
    return action.tweets
  }

  return state
}

const store = createStore(tweetReducer)

window.store = store
