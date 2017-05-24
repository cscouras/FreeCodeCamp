import React from 'react'
import Button from './Button'
import Modal from './Modal'

class Ingredients extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      title: this.props.recipe.title,
      ingredients: this.props.recipe.ingredients.join(' ,')

    }
  }

  _toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  _editIngredients = () => {
    const prevList = JSON.parse(localStorage.getItem('recipeList'))
    const newRec = {
      id: this.props.recipe.id,
      title: this.state.title,
      ingredients: this.state.ingredients
    }
    prevList.splice(this.props.recipe.id, 1, newRec)
    localStorage.setItem('recipeList', JSON.stringify(prevList))
    this._toggleModal()
  }

  render(){
    let data = this.props.data
    let recipeID = this.props.recipe.id
    console.log(data[recipeID].title);
    return (
      <div className='recipe-title'>
        <h3>Ingredients</h3>
        {this.props.ingredients.map((ingredient)=>
          <p key={ingredient}>{ingredient}</p>
        )}
        <Button name="Delete" buttonClass="delete" />
        <Button name="Edit" buttonClass="edit" onClick={this._toggleModal}/>

        {this.state.isOpen &&
        <Modal onClose={this._toggleModal}
          name="Edit Recipe"
          recipeValue={this.state.title}
          inputChange={this.handleInputChange}
          inputRecipeName="title"
          ingredientsValue={this.state.ingredients}
          inputIngredientsName="ingredients"
          buttonName="Edit Recipe"
          buttonClass="disabled"
          buttonAction={this._editIngredients}
          />
      }
      </div>
    )
  }
}


export { Ingredients }
