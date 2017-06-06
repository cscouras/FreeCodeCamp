import React, { Component } from 'react'
import Header from './Header'
import Table from './Table'
import '../style/App.css'

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <Header />
        <Table />
      </div>
    )
  }
}

export default App
