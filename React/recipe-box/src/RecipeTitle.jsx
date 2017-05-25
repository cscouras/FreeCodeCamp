import React from 'react'
import Button from './Button'
import EditRecipe from './EditRecipe'


class RecipeTitle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: props.data,
      showIngredients: false
    }
  }

  _showIngredients = () => {
    this.setState({
      showIngredients: !this.state.showIngredients
    })
  }

  _onDataChange = () => {
    this.props.changeData()
  }

  render(){
    const id = this.props.id
    const title = this.props.title
    const ingredients = this.props.ingredients
    return(
      <div>
        <h1 onClick={this._showIngredients}>{this.props.title}</h1>
        {this.state.showIngredients &&
          <div className="recipe-title">
            <h3>Ingredients</h3>
            {ingredients.map((ingredient)=>
              <p key={ingredient}>{ingredient}</p>
            )}
            <Button name="Delete" buttonClass="delete" />
            <EditRecipe
              id={id}
              title={title}
              ingredients={ingredients}
              data={this.state.data}
              dataEdit={this._onDataChange}/>
          </div>}
        </div>
    )
  }
}

export default RecipeTitle;
