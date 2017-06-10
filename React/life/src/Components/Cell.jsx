import React, { Component } from 'react'

class Cell extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render () {
    return(
      <div onClick={this.toggle} className={`square ${this.state.active ? 'active': 'inactive' } ${this.props.index}`}></div>
      )
  }
}


export default Cell
