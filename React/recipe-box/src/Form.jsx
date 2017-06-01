import React, { Component } from 'react'

class Form extends Component {
  handleInputChange = (e)=>{
    const target = e.target
    const name = target.name
    const value = target.value
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
