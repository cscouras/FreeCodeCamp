import React from 'react'
import Cell from './Cell'


const Row = props => {
  return (
    <div className="row">
      {props.rowContent.map(cell => {
        return <Cell key={cell.rowId+'-'+cell.colId}
          rowId={cell.rowId}
          colId={cell.colId}
          alive={cell.alive}
          handleCellClick={props.handleCellClick}/>
      })}
    </div>
  )
}

export default Row
