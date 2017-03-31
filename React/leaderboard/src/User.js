import React from 'react'

let User = function(props){
  return (
    <tr>
      <td>{props.rank}</td>
      <td><img src={props.img} alt={props.name + ' avatar'}/>  </td>
      <td><a href={'http://freecodecamp.com/' + props.name}>{props.name}</a></td>
      <td>{props.recent}</td>
      <td>{props.alltime}</td>
    </tr>
  )
}

export { User }
