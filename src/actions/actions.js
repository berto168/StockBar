import drinks from '../data/drinks'

export function buyDrink(drink) {
  return {
    type: "BUY_DRINK",
    payload: drink
  }
}

export function addDrink(drink) {
  return {
    type: "ADD_DRINK",
    payload: drink
  }
}

export function getDrinks(){
  return {
    type: "GET_DRINKS",
    payload: drinks
  }
}
