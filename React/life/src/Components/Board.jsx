import React, { Component } from 'react'
import Cell from './Cell'

class Grid extends Component {
  render(){
    return (
      <div className='board'>
        {this.props.children}
      </div>
    )
  }
}

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      cells: this.props.height * this.props.width,
      height: this.props.height,
      width: this.props.width
    }
  }

  render(){
    let cells = []
    for(let i = 0; i < this.state.cells; i++){
      cells.push(<Cell key={i+1} index={i+1}/>)
    }
    return(
      <Grid numRows={this.state.height}>
          {cells}
      </Grid>
    )
  }
}

export default Board
