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
      <td onClick={this.toggle} className={this.state.active ? 'active': 'inactive'}></td>
      )
  }
}


export default Cell
