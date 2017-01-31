import React from 'react'
import Drink from './Drink'

function List(props) {

  const drink_rows = props.data.drinks.map((drink) =>
  <li key={drink.name}>
    <Drink data={drink} />
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
