import React from 'react';
import Header from './Header';
import { RecipeContainer, Button } from './RecipeName';
import './App.css';

const defaultData = [
  {id: 0,
  title: "Italian Sausage",
  ingredients: ["sausage", "peppers", "onions", "garlic"]},
  {id: 1,
  title: "Pizza",
  ingredients: ["dough", "cheese", "sauce"]}
]

const App = () => {
  return (
    <div className="app">
      <Header />
      <RecipeContainer recipes={ defaultData }/>
      <Button name="Add Recipe"></Button>
    </div>
  )
}


export default App;
