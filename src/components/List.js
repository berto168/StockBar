import React from 'react'

export default function List(props) {

  return (
    <div className="List">
      <h3>{props.type}</h3>
      <ul>
        <li><button>Corona</button></li>
        <li><button>Sam Adams</button></li>
        <li><button>Heineken</button></li>
      </ul>
    </div>
  )
}
