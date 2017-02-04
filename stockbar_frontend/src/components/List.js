import React from 'react'
import Drink from './Drink'
import Price from './Price'

function List(props) {

  const drink_rows = props.data.drinks.map((drink) =>
  <li key={drink.name}>
    <Drink name={drink.name} type={props.data.type} />
    <Price prices={drink.price} />
  </li>
  )

  return (
    <div className="List">
      <h3>{props.data.type}</h3>
      <ul>
        {drink_rows}
      </ul>
    </div>
  )
}

export default List;
