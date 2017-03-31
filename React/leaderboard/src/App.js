import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

import './css/app.sass';

let App = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Free Code Camp Leaderboard</h1>
        <Table />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root'))
