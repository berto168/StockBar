import { combineReducers } from 'redux'

function bar(state = [], action){
  switch (action.type) {
    case "GET_DRINKS":
      return action.payload
    case "BUY_DRINK":
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({ bar })

export default rootReducer
