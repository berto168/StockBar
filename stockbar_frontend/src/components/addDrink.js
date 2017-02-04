import React from 'react'

export default function addDrink() {
  return (
    <div className="NewUser">
      <h1>Add Drink</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input id="name" type="text"/>
        <label htmlFor="price">Price: </label>
        <input id="price" type="text"/>
        <br/>
        <input type="submit" value="Add Drink"/>
      </form>
    </div>
  )
}
