import $ from 'jquery'

export function getDrinks() {
  const promise = $.ajax({
  url: "http://localhost:3000/menu",
  type: "GET",
  contentType: "application/json; charset=utf-8",
  dataType: "json"
  })

  return {
    type: "GET_DRINKS",
    payload: promise
  }
}

export function buyDrink(drink, type) {

  return {
    type: "BUY_DRINK",
    payload: { drink, type }
  }
}

//
// export function addDrink(drink) {
//   return {
//     type: "ADD_DRINK",
//     payload: drink
//   }
// }
