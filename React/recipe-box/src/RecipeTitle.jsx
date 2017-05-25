import React from 'react'
import EditRecipe from './EditRecipe'
import DeleteRecipe from './DeleteRecipe'


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

  _onDataChange = (arr) => {
    this._showIngredients()
    this.props.changeData(arr)
  }

  render(){
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
            <DeleteRecipe
              index={this.props.index}
              data={this.state.data}
              dataDelete={this._onDataChange}/>
            <EditRecipe
              index={this.props.index}
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
