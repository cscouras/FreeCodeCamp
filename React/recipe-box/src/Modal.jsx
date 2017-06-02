import React from 'react'
import Button from './Button'
import Form from './Form'
import PropTypes from 'prop-types'

class Modal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: this.props.recipeName,
      ingredients: this.props.recipeIngredients
    }
  }

  handleChange =(name, value)=>{
    this.setState({
      [name]: value
    })
  }

  sendData= (arr) =>{
    this.props.handleData(arr)
  }

  handleSubmit = () =>{
    let currentStorage = JSON.parse(localStorage.getItem('recipeList'))
    let checkIndex = currentStorage.findIndex((item, i)=>{
      return item.title === this.state.title
    })
    console.log(checkIndex);
    console.log(checkIndex >=0 ? 'already exists' : 'not in object');
    let ingStr = this.state.ingredients
    let reg = /\s*,\s|,/
    let ingArr = (typeof ingStr === 'string') ? ingStr.split(reg) : this.state.ingredients

    if(checkIndex >=0){
      currentStorage[checkIndex].ingredients = ingArr
    } else {
      const newRecipe = {
        title: this.state.title,
        ingredients: ingArr
      }
      currentStorage.push(newRecipe)
    }
    this.props.onClose()
    this.sendData(currentStorage)
  }


  render() {
    let button = null;
    if (this.state.title.length === 0 ||
      this.state.ingredients.length === 0){
        button = <Button
          name='Submit'
          buttonClass='disabled'
          disable={true} />
      } else {
        button = <Button
          buttonClass='submit'
          name="Submit"
          onClick={this.handleSubmit} />
      }
    return (
      <div className='backdrop'>
        <div className='modal'>
          <h3>{this.props.name}</h3>
          <Form
            onChange={this.handleChange}
            recipeName={this.state.title}
            recipeIngredients={this.state.ingredients}
            />

          {button}
          <Button name="Close"
            buttonClass='close'
            onClick={this.props.onClose} />
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Modal
