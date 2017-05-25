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
              return (
              <div key={recipe.id}>
                <RecipeTitle
                  id={recipe.id}
                  title={recipe.title}
                  ingredients={recipe.ingredients}
                  data={this.state.data}
                  changeData={this._handleDataUpdate}/>
              </div>
            )
          }
        )}
      </div>
      <AddRecipe changeData={this._handleDataUpdate}/>
    </div>
    )
  }
}

export default App;
