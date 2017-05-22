import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let DATA = localStorage.getItem('recipeList') || [
  {id: 0,
  title: "Italian Sausage",
  ingredients: ["sausage", "peppers", "onions", "garlic"]},
  {id: 1,
  title: "Pizza",
  ingredients: ["dough", "cheese", "sauce"]}
]


ReactDOM.render(
  <App data={DATA}/>,
  document.querySelector('#root')
);
