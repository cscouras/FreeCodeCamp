import React, { Component } from 'react'

class Form extends Component {
  handleInputChange = (e)=>{
    const target = e.target
    const name = target.name
    const value = target.value
    console.log(value);
    this.props.onChange(name, value)
  }
  render(){
    return (
      <form>
        <label>
          Recipe:
        </label>
        <br />
        <input type='text'
          className='input-text'
          name="title"
          value={this.props.recipeName}
          placeholder="Add Recipe Name"
          onChange={this.handleInputChange}/>
        <br />
        <label>
          Ingredients:
        </label>
        <br />
        <textarea
          className='textarea'
          name="ingredients"
          value={this.props.recipeIngredients}
          placeholder="Add Ingredients separated by a comma"
          onChange={this.handleInputChange}/>
        <br/>
      </form>
    )
  }
}

export default Form
