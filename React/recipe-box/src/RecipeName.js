import React from 'react'

const Ingredients = (props) => {
  let hide = props.hide ? 'hide' : null;
  let ingredients = props.ingredients;
  let listIngredients = ingredients.map((item) =>
    <p key={item}>{item}</p>
  )
  return (
    <div className={ hide }>
      <h3>Ingredients</h3>
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

class RecipeTitle extends React.Component {
  constructor(props){
    super(props);
    this.state = {showIngredients: false};
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({showIngredients: !this.state.showIngredients })
  }

  render() {
    let recList = this.props.recipes.map((item) =>
    <div className="recipe-title" key={item.id}>
      <h1 onClick={this.handleClick}>{item.title}</h1>
      <Ingredients ingredients={item.ingredients} hide={this.state.showIngredients}/>
    </div>)
    return (
      <div>{recList}</div>
    )
  }
}

const RecipeContainer = (props) => {
  return (
    <div className="recipe-container">
      <RecipeTitle recipes={props.recipes}/>
    </div>
  )
}


export { RecipeContainer, Button };
