import $ from 'jquery'

export function getDrinks() {
  const promise = $.ajax({
  url: "http://localhost:8080/drinks",
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
  const promise = $.ajax({
  url: "http://localhost:8080/drinks",
  type: "POST",
  contentType: "application/json; charset=utf-8",
  dataType: "json"
  })

  return {
    type: "BUY_DRINK",
    payload: promise
  }
}

//
// export function addDrink(drink) {
//   return {
//     type: "ADD_DRINK",
//     payload: drink
//   }
// }
