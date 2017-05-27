import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const backdropStyle = {
  position:'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.7)',
  padding: 50
}

const modalStyle ={
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30
}

class Modal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: this.props.recipeName,
      ingredients: this.props.recipeIngredients
    }
  }

  handleChange =(e)=>{
    const target = e.target
    const name = target.name
    const value = target.value

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
      console.log(currentStorage[checkIndex]);
      console.log(currentStorage);
    } else {
      const newRecipe = {
        title: this.state.title,
        ingredients: ingArr
      }
      currentStorage.push(newRecipe)
      console.log(currentStorage);
    }
    this.props.onClose()
    this.sendData(currentStorage)
  }


  render() {
    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <h3>{this.props.name}</h3>
          <form>
            <label>
              Recipe:
            </label>
            <br />
            <input type='text'
              name="title"
              value={this.state.title}
              placeholder="Add Recipe Name"
              onChange={this.handleChange}/>
            <br />
            <label>
              Ingredients:
            </label>
            <br />
            <textarea
              name="ingredients"
              value={this.state.ingredients}
              placeholder="Add Ingredients separated by a comma"
              onChange={this.handleChange}/>
            <br/>
          </form>
          <Button
            buttonClass='add'
            name="Submit"
            onClick={this.handleSubmit} />
          <Button name="Close"
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
