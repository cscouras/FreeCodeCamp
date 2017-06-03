import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import './style/index.css'

let DATA = [
  {
  title: "BLT",
  ingredients: ["bacon", "lettuce", "tomato", "toast"]},
  {
  title: "Pizza",
  ingredients: ["dough", "cheese", "sauce"]}
]

if(!localStorage.getItem('recipeList')){
  localStorage.setItem('recipeList', JSON.stringify(DATA))
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
