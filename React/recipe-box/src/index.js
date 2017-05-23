import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let DATA = [
  {id: 0,
  title: "Italian Sausage",
  ingredients: ["sausage", "peppers", "onions", "garlic"]},
  {id: 1,
  title: "Pizza",
  ingredients: ["dough", "cheese", "sauce"]}
]

if(!localStorage.getItem('recipeList')){
  localStorage.setItem('recipeList', JSON.stringify(DATA))
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
