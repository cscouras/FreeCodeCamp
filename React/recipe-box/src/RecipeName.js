import React from 'react'

const Ingredients = (props) => {
  let ingredients = props.ingredients;
  let listIngredients = ingredients.map((item) =>
    <p key={item}>{item}</p>
  )
  return (
    <div>
      {listIngredients}
      <Button name="Delete" buttonClass="delete"/>
      <Button name="Edit" buttonClass="edit"/>
      </div>
  )
}

const Button = (props) => {
  return (
    <button className={props.buttonClass} >
      {props.name}
    </button>
  )
}

const RecipeTitle = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    alert(e.target.innerText);
  }
  let recList = props.recipes.map((item) =>
      <div className="recipe-title" key={item.id}>
        <h1 onClick={handleClick}>{item.title}</h1>
        <Ingredients ingredients={item.ingredients}/>
      </div>
  )
  return (
    <div>{recList}</div>
  )
}

const RecipeContainer = (props) => {
  return (
    <div className="recipe-container">
      <RecipeTitle recipes={props.recipes}/>
    </div>
  )
}


export { RecipeContainer, Button };
