import React from 'react'
import { Ingredients } from './Ingredients'

class RecipeTitle extends React.Component{
  constructor(props){
    super(props)
    this.state = {hide: true}
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({hide: this.state.hide ? false : true})
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>{ this.props.recipe.title }</h1>
        <Ingredients ingredients={this.props.recipe.ingredients} hide={this.state.hide ? "hide" : null }/>
      </div>
    )
  }
}


export { RecipeTitle };
