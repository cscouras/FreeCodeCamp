import React from 'react';
import Header from './Header';
import RecipeName from './RecipeName';
import './App.css';

const recipes = {
  title: "Sausage and Peppers",
  ingredients: ['sausage', 'peppers', 'onions', 'garlic']
}

class App extends React.Component {

  render() {
    console.log(recipes);
    return (
      <div className="app">
        <Header />
        <RecipeName recipe={ recipes }/>
      </div>
    )
  }
}

export default App;
