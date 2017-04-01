import React from 'react'
import {getRecent, getAllTime} from './xhr'
import {User} from './User'

class Table extends React.Component {
  constructor(props){
    super(props)
    this.state = {users:[]}
  }

  getData = (jsonResults) => {
    this.setState({users: jsonResults.data})
  }

  componentDidMount() {
    console.log('Component Did Mount');
    getRecent().then(this.getData)
  }

  handleRecent = () => {
    getRecent().then(this.getData)
  }

  handleAlltime = () =>{
    getAllTime().then(this.getData)
  }

  render() {
    console.log('Table Rendered');
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
}

export {Table}
