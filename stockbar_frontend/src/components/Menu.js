import React from 'react'
import List from './List'

function Menu(props){

  const lists = props.menu.map((category) =>
    <td key={category.type} className="three columns">
      <List data={category} />
    </td>
  )

  return (
    <div className="Menu">
      <table>
        <tbody>
          <tr>
            {lists}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Menu;
