import React from 'react';
import {getRecent, getAllTime} from './xhr';

let User = function(props){
  return (
    <tr>
      <td>{props.rank}</td>
      <td><img src={props.img} alt={props.name + ' avatar'}/>  </td>
      <td><a href={'http://freecodecamp.com/' + props.name}>{props.name}</a></td>
      <td>{props.recent}</td>
      <td>{props.alltime}</td>
    </tr>
  )
}

let TotalTable = React.createClass({
  getInitialState: function() {
    return {users: []};
  },

  componentDidMount: function() {

    getRecent().then(results => {
      console.log(results);
      this.setState({users: results.data});
    });
  },

  render: function() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Rank</th>
              <th colSpan='2'>Camper</th>
              <th>Past 30 Days</th>
              <th>All-Time</th>
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

export default TotalTable;
