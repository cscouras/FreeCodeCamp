import React from 'react'
import Cell from './Cell'

const Table = () => {
    let rows = []
    let col = []
    for (let i = 0; i < 25; i++) {
      let rowKey = `${i}`
      for (let a = 0; a < 70; a++) {
        let key = `${i}-${a}`
        col.push(
          <Cell key={key} />
        )
      }
      rows.push(
        <tr key={rowKey}>{col}</tr>
      )
      col = []
    }
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
}

export default Table
