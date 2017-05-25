import React from 'react';
import Header from './Header';
import RecipeTitle from './RecipeTitle'
import AddRecipe from './AddRecipe'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data : JSON.parse(localStorage.getItem('recipeList'))
  }
}

  _handleDataUpdate =(arr)=>{
    localStorage.setItem('recipeList', JSON.stringify(arr))
    console.log(arr, 'ARRAY PASSED TO SET STATE IN APP');
    this.setState({
      data: arr
    })

  }

  render() {
    let recipes = this.state.data;
    console.log(recipes, 'RECIPES');
    return (
      <div className="app">
        <Header />
        <div className="recipe-container">
          {recipes.map((recipe)=> {
            const name = recipe.title
            const index = recipes.findIndex((item, i)=>{
              return item.title === name
            })
              return (
              <div key={recipe.title}>
                <RecipeTitle
                  index={index}
                  title={recipe.title}
                  ingredients={recipe.ingredients}
                  data={this.state.data}
                  changeData={this._handleDataUpdate}/>
              </div>
            )
          }
        )}
      </div>
      <AddRecipe
        data={recipes}
        changeData={this._handleDataUpdate}/>
    </div>
    )
  }
}

export default App;
