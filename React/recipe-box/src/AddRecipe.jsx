import React from 'react'
import Button from './Button'
import Modal from './Modal'

class AddRecipe extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      showModal: false,
      newRecipe: '',
      newIngredients: ''
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
      newRecipe: '',
      newIngredients: ''
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

  handleDataChange =(arr)=>{
    this.toggleModal()
    this.props.changeData(arr);
  }

  _addRecipe = () => {
    const recipeList = this.props.data
    let ingStr = this.state.newIngredients
    let reg = /\s*,\s/
    let ingToArr = ingStr.split(reg)
    const newRec = {
      title: this.state.newRecipe,
      ingredients: ingToArr
    }
    recipeList.push(newRec)
    this.handleDataChange(recipeList)
  }

  render(){
    return (
      <div>
        <Button name="Add Recipe" onClick={this.toggleModal} />
        {this.state.showModal &&
          <Modal
            onClose={this.toggleModal}
            name="Add Recipe"
            recipeValue={this.state.newRecipe}
            inputRecipeName="newRecipe"
            inputChange={this.handleInputChange}
            inputIngredientsName="newIngredients"
            ingredientsValue={this.state.newIngredients}
            buttonName="Add Recipe"
            buttonClass="disabled"
            buttonAction={this._addRecipe}/>
          }
      </div>
    )
  }
}

export default AddRecipe
