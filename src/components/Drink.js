import React from 'react'

function Drink(props) {

  return (
    <div className="Drink">
      <button>
        {props.data.name} - ${props.data.price}
      </button>
    </div>
  )
}

export default Drink;
