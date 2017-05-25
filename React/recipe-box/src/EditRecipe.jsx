import React from 'react'
import Button from './Button'
import Modal from './Modal'

class EditRecipe extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      showModal: false,
      title: this.props.title,
      ingredients: this.props.ingredients.join(', ')
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
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

  handleDataEdit = (arr)=>{
    this.toggleModal();
    this.props.dataEdit(arr);
  }

  _editRecipe = () => {
    const prevList = JSON.parse(localStorage.getItem('recipeList'))
    let ingStr = this.state.ingredients
    let reg = /\s*,\s/
    let ingToArr = ingStr.split(reg)
    const newRec = {
      id: this.props.id,
      title: this.state.title,
      ingredients: ingToArr
    }
    prevList.splice(this.props.id, 1, newRec)
    localStorage.setItem('recipeList', JSON.stringify(prevList))
    this.handleDataEdit(prevList)
  }

  render(){
    console.log(this.state.ingredients, 'OK');
    return (
      <div>
        <Button name="Edit Recipe" buttonClass='edit' onClick={this.toggleModal} />
        {this.state.showModal &&
          <Modal
            onClose={this.toggleModal}
            name="Edit Recipe"
            recipeValue={this.state.title}
            inputRecipeName="title"
            inputChange={this.handleInputChange}
            inputIngredientsName="ingredients"
            ingredientsValue={this.state.ingredients}
            buttonName="Edit Recipe"
            buttonClass="disabled"
            buttonAction={this._editRecipe}/>
          }
      </div>
    )
  }
}

export default EditRecipe
