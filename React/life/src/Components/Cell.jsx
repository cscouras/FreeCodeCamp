import React from 'react'

const Cell = props => {
  const _onClick = () => {
    props.handleCellClick(props.rowId, props.colId)
  }
  return <div className={`square ${props.alive ? 'alive': ''}`} onClick={_onClick}></div>
}

export default Cell
