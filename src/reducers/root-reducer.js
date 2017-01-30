import { combineReducers } from 'redux'
import drinks from '../data/drinks'

function bar(state = drinks, action){
  switch (action.type) {
    case "BUY_DRINK":
      return state
    case "ADD_DRINK":
      return Object.assign({}, state, action.payload)
    case "GET_DRINKS":
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({ bar })

export default rootReducer
