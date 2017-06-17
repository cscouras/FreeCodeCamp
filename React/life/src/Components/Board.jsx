import React, { Component } from 'react'

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

  redrawGrid = type => {
    clearInterval(this.timerID)
    this.setState({
      gridContent: this.drawGrid(type),
      generationCount: 0
    })
  }

  drawGrid = type => {
    let { height, width } = this.props
    let grid = []
    for(let row = 0; row < height; row++){
      let rowContent = []
      let alive
      for(let col = 0; col < width; col++){
        if(type === 'random'){
          alive = (Math.random() * 10) + 1 <= 4  ? true : false
        } else if(type === 'clear'){
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
        rowContent.push(this.updateCell(row,col))
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

  updateCell = (row, col) =>{
    let livingNeighbors = this.livingNeighborCount(row, col)
    let current = this.state.gridContent
    let alive = current[row][col].alive

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

  cellClick = (coords) => {
    let gridContent = this.state.gridContent
    let [row, col] = coords
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
          <Button className='btn' id="Run" handleButtonClick={this.run} />
          <Button className='btn' id="Stop" handleButtonClick={this.stop}/>
          <Button className='btn' id="Clear" handleButtonClick={this.redrawGrid} />
          <Button className='btn' id="Random" handleButtonClick={this.redrawGrid} />
        </div>
      </div>
    )
  }
}

const Grid = props => {
  return (
    <div className='board'>
    {props.gridContent.map((row, index)=>{
      return <Row key={index} rowContent={row} handleCellClick={props.handleCellClick}/>
    })}
  </div>
)
}

const Row = props => {
  return (
    <div className="row">
      {props.rowContent.map(cell => {
        return <Cell key={cell.rowId+'-'+cell.colId} {...cell}
          handleCellClick={props.handleCellClick}/>
      })}
    </div>
  )
}

const Cell = props => {
  const _onClick = () => {
    props.handleCellClick([props.rowId, props.colId])
  }
  return <div className={`square ${!props.alive ? '': 'alive'}`} onClick={_onClick}></div>
}

const Button = props => {
  const _onClick = () => {
    if(props.id.toLowerCase() === 'clear'){
      props.handleButtonClick('clear')
    } else if(props.id.toLowerCase() === 'random'){
      props.handleButtonClick('random')
    } else {
      props.handleButtonClick()
    }
  }
  return <button className={props.className} onClick={_onClick}>
    {props.id}
  </button>
}

export default Board
