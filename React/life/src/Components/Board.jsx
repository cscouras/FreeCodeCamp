import React, { Component } from 'react'

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      boardContent: [],
      generationCount: 0
    }
  }

  componentWillMount () {
    this.setState({
      boardContent: this.drawBoard('random')
    })
  }

  componentDidMount () {
    this.timerID = setInterval(
      this.updateBoard, this.props.delay
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  run = () => {
    if(this.timerID){
      clearInterval(this.timerID)
    }
      this.timerID = setInterval(this.updateBoard, this.props.delay)
  }

  stop = () => {
    clearInterval(this.timerID)
  }

  clearBoard = () => {
    clearInterval(this.timerID)
    this.setState({
      boardContent: this.drawBoard('clear'),
      generationCount: 0
    })
  }

  restart = () => {
    clearInterval(this.timerID)
    this.setState({
      boardContent: this.drawBoard('random'),
      generationCount: 0
    })
  }

  drawBoard = board => {
    let { height, width } = this.props
    let grid = []
    for(let row = 0; row < height; row++){
      let rowContent = []
      let alive
      for(let col = 0; col < width; col++){
        if(board === 'random'){
          alive = Math.round(Math.random()) === 0 ? false : true
        } else if(board === 'clear'){
          alive = false
      }
        rowContent.push({rowId: row, colId: col, alive: alive})
      }
      grid.push(rowContent)
    }
    return grid
  }

  updateBoard = () => {
    let nextGen = []
    let {height, width} = this.props
    for(let row = 0; row < height; row++){
      let rowContent = []
      for(let col = 0; col < width; col++){
        rowContent.push(this.updateCell(row,col))
      }
      nextGen.push(rowContent)
    }
    this.setState({
      boardContent: nextGen,
      generationCount: this.state.generationCount + 1
    })
  }

  updateCell = (row, col) =>{
    let {height, width} = this.props
    let current = this.state.boardContent
    let livingNeighbors = 0
    let alive = current[row][col].alive
    let neighborLoc = [[row-1, col-1], [row-1, col], [row-1, col+1],
                       [row, col-1],   [row, col+1],
                       [row+1, col-1], [row+1, col,],[row+1,col+1]]

    let neighbors = neighborLoc.map(index => {
      // remove boundaries
      if(index[0] < 0){
        index[0] = height-1
      } else if(index[0] === height){
        index[0] = 0
      }

      if(index[1] < 0){
        index[1] = width-1
      } else if(index[1] === width){
        index[1] = 0
      }

      return current[index[0]][index[1]]
    })

    neighbors.forEach(neighbor => {
      if(neighbor.alive){
        livingNeighbors++
      }
    })

    if(alive) {
      if(livingNeighbors < 2 || livingNeighbors > 3){
        alive = false;
      }
    } else {
      if(livingNeighbors === 3){
        alive = true;
      }
    }
    return {rowId: row, colId: col, alive: alive}
  }

  handleCellClick = (coords) => {
    let boardContent = this.state.boardContent
    let [row, col] = coords
    let currentCell = boardContent[row][col]

    currentCell.alive ? currentCell.alive = false : currentCell.alive = true

    this.setState({
      boardContent: boardContent
    })
  }

  render(){
    return(
      <div>
        <Grid boardContent={this.state.boardContent} onCellClick={this.handleCellClick}/>
        <Button className='' id="Run" handleClick={this.run} />
        <Button className='' id="Stop" handleClick={this.stop}/>
        <Button className='' id="Clear" handleClick={this.clearBoard} />
        <Button className='' id="Random" handleClick={this.restart} />
        <h3>Generations: {this.state.generationCount}</h3>
      </div>
    )
  }
}

const Grid = (props) => {
  return (
    <div className='board'>
    {props.boardContent.map((row, index)=>{
      return <Row key={index} rowContent={row} onCellClick={props.onCellClick}/>
    })}
  </div>
)
}

const Row = (props) => {
  return (
    <div className="row">
      {props.rowContent.map(cell => {
        return <Cell key={cell.rowId+'-'+cell.colId} {...cell}
          onCellClick={props.onCellClick}/>
      })}
    </div>
  )
}

const Cell = (props) => {
  const _onClick = () => {
    props.onCellClick([props.rowId, props.colId])
  }
  return <div className={`square ${!props.alive ? '': 'alive'}`} onClick={_onClick}></div>
}

const Button = props => {
  return <button className={props.className} onClick={props.handleClick}>
    {props.id}
  </button>
}

export default Board
