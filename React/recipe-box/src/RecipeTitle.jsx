import React from 'react'
import { Ingredients } from './Ingredients'

class RecipeTitle extends React.Component{
  constructor(props){
    super(props)
    this.state = {isOpen: false}
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>{ this.props.recipe.title }</h1>
        {this.state.isOpen &&
        <Ingredients ingredients={this.props.recipe.ingredients}
          recipe={this.props.recipe} data={this.props.data}/>
        }
      </div>
    )
  }
}


export { RecipeTitle };
