import axios from 'axios'

let getRecent = function() {
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
}


let getAllTime = function() {
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
}


export {
  getRecent,
  getAllTime
}
