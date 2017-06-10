import React, { Component } from 'react'
import Header from './Header'
import Board from './Board'
import '../style/App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Board height={30} width={50} />
      </div>
    )
  }
}

export default App
