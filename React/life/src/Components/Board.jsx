import React, { Component } from 'react'
import Grid from './Grid'
import Button from './Button'

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      gridContent: [],
      generationCount: 0
    }
  }

  componentWillMount () {
    this.setState({
      gridContent: this.drawGrid('random')
    })
  }

  componentDidMount () {
    this.timerID = setInterval(
      this.updateGridContent, this.props.interval
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  run = () => {
    let { interval } = this.props
    if(this.timerID){
      clearInterval(this.timerID)
    }
      this.timerID = setInterval(this.updateGridContent, interval)
  }

  stop = () => {
    clearInterval(this.timerID)
  }

  reDrawGrid = boardType => {
    clearInterval(this.timerID)
    this.setState({
      gridContent: this.drawGrid(boardType),
      generationCount: 0
    })
  }

  drawGrid = boardType => {
    let { height, width } = this.props
    let grid = []
    for(let row = 0; row < height; row++){
      let rowContent = []
      let alive
      for(let col = 0; col < width; col++){
        if(boardType === 'random'){
          alive = (Math.random() * 10) + 1 <= 4  ? true : false
        } else if(boardType === 'clear'){
          alive = false
      }
        rowContent.push({rowId: row, colId: col, alive: alive})
      }
      grid.push(rowContent)
    }
    return grid
  }

  updateGridContent = () => {
    let nextGen = []
    let {height, width} = this.props
    for(let row = 0; row < height; row++){
      let rowContent = []
      for(let col = 0; col < width; col++){
        rowContent.push(this.cellStatusCheck(row,col))
      }
      nextGen.push(rowContent)
    }
    this.setState({
      gridContent: nextGen,
      generationCount: this.state.generationCount + 1
    })
  }

  livingNeighborCount = (rowId, colId) => {
    let {height, width} = this.props
    let current = this.state.gridContent
    let livingNeighbors = 0

    let neighborLocations = [[rowId-1, colId-1], [rowId-1, colId], [rowId-1, colId+1],
                       [rowId, colId-1],   [rowId, colId+1],
                       [rowId+1, colId-1], [rowId+1, colId,],[rowId+1,colId+1]]

    neighborLocations.forEach(neighbor => {
      // remove boundaries
      if(neighbor[0] < 0){
        neighbor[0] = height-1
      } else if(neighbor[0] === height){
        neighbor[0] = 0
      }

      if(neighbor[1] < 0){
        neighbor[1] = width-1
      } else if(neighbor[1] === width){
        neighbor[1] = 0
      }

       if(current[neighbor[0]][neighbor[1]].alive){
         livingNeighbors++
       }
    })
    return livingNeighbors
  }

  cellStatusCheck = (row, col) =>{
    let livingNeighbors = this.livingNeighborCount(row, col)
    let currentGrid = this.state.gridContent
    let alive = currentGrid[row][col].alive

    if(alive && (livingNeighbors < 2 || livingNeighbors > 3)) {
        alive = false;
    } else {
      if(livingNeighbors === 3){
        alive = true;
      }
    }
    return {rowId: row, colId: col, alive: alive}
  }

  cellClick = (row, col) => {
    let gridContent = this.state.gridContent
    let currentCell = gridContent[row][col]

    currentCell.alive ? currentCell.alive = false : currentCell.alive = true

    this.setState({
      gridContent: gridContent
    })
  }

  render(){
    return(
      <div>
        <h2>Generations: {this.state.generationCount}</h2>
        <Grid gridContent={this.state.gridContent}
          handleCellClick={this.cellClick}/>
        <div className="btn-grp">
          <Button id="Run" handleButtonClick={this.run} />
          <Button id="Stop" handleButtonClick={this.stop}/>
          <Button id="Clear" handleButtonClick={this.reDrawGrid} />
          <Button id="Random" handleButtonClick={this.reDrawGrid} />
        </div>
      </div>
    )
  }
}

export default Board
