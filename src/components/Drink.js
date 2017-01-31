import React from 'react'

function Drink(props) {

  return (
    <div className="Drink">
      <button>
        {props.name}
      </button>
    </div>
  )
}

export default Drink;
