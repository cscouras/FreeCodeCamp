import React from 'react'

const RecipeContents = (props) => {
  let ingredients = props.list;
  let listIngredients = ingredients.map((item) =>
    <li key={item}>{item}</li>
  )
  return(
    <ul>
      {listIngredients}
    </ul>

  )
}

const Button = (props) => {
  return (
    <button>
      {props.name}
    </button>
  )
}

class RecipeName extends React.Component{
  render(){
    return (
      <div className="recipe-name">
        <h1>{this.props.recipe.title}</h1>
        <RecipeContents className="recipe-contents" list={this.props.recipe.ingredients}/>
        <Button name="Delete" />
        <Button name="Edit" />
      </div>
    )
  }
}

export default RecipeName;
