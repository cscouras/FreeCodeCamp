import React from 'react';
import Header from './Header';
import { RecipeContainer, Button } from './RecipeName';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { recipeList : null }
  }

  componentWillMount(){
    if(localStorage.getItem('recipeList') === null){
      const defaultData = [
        {id: 0,
        title: "Italian Sausage",
        ingredients: ["sausage", "peppers", "onions", "garlic"]},
        {id: 1,
        title: "Pizza",
        ingredients: ["dough", "cheese", "sauce"]}
      ]

      localStorage.setItem('recipeList', JSON.stringify(defaultData))
    }
    const recipes = JSON.parse(localStorage.getItem('recipeList'))
    this.setState({recipeList: recipes})
  }


  render(){
    return (
      <div className="app">
        <Header />
        <RecipeContainer recipes={ this.state.recipeList }/>
        <Button name="Add Recipe"></Button>
      </div>
    )
  }
}


export default App;
