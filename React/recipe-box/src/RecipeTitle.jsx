import React from 'react'
import { Ingredients } from './Ingredients'

class RecipeTitle extends React.Component{
  constructor(props){
    super(props)
    this.state = {isOpen: false}
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>{ this.props.recipe.title }</h1>
        <Ingredients ingredients={this.props.recipe.ingredients} show={this.state.isOpen}/>
      </div>
    )
  }
}


export { RecipeTitle };
