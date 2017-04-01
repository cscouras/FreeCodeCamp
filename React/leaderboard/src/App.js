import React from 'react'
import ReactDOM from 'react-dom'
import {Table} from './Table'

import './css/app.sass';

class App extends React.Component {
  render (){
    return (
      <div>
        <h1>Free Code Camp Leaderboard</h1>
        <Table />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'))
