import React from 'react'

export default function Drink(props) {

  return (
    <div className="Drink">
      <li>
        <button>
          {props.name} - {props.price}
        </button>
      </li>
    </div>
  )
}
