import React from 'react'

function Price(props) {

  return (
    <div className="Price">
      ${props.prices.price.toFixed(2)}
    </div>
  )
}

export default Price;
