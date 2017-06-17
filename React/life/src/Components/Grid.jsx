import React from 'react'
import Row from './Row'

const Grid = props => {
  return (
    <div className='board'>
    {props.gridContent.map((row, index)=>{
      return <Row key={index} rowContent={row} handleCellClick={props.handleCellClick}/>
    })}
  </div>
  )
}

export default Grid
