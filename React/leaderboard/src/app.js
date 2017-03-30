import React from 'react';
import ReactDOM from 'react-dom';
import TotalTable from './table';

import './css/app.sass';

let App = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Free Code Camp Leaderboard</h1>
        <TotalTable />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root'))
