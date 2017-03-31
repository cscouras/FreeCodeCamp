import React from 'react'
import {getRecent, getAllTime} from './xhr'
import {User} from './User'

let Table = React.createClass({
  getInitialState: function() {
    return {users: []}
  },

  getData: function (jsonResults){
    this.setState({users: jsonResults.data})
  },

  componentDidMount: function() {
    getRecent().then(this.getData)
  },

  handleRecent: function(){
    getRecent().then(this.getData)
  },

  handleAlltime: function(){
    getAllTime().then(this.getData)
  },

  render: function() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Rank</th>
              <th colSpan='2'>Camper</th>
              <th onClick={this.handleRecent}>Past 30 Days</th>
              <th onClick={this.handleAlltime}>All-Time</th>
            </tr>
          </thead>
          <tbody>
              {this.state.users.map((user, i) =>{
                return <User name={user.username} img={user.img} recent={user.recent} alltime={user.alltime} rank={i+1} key={user.img} />
              })}
          </tbody>
        </table>
      </div>
    )
  }

});

export default Table
