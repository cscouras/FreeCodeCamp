import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Ingredients from './Ingredients'

class RecipeTitle extends Component {
  constructor(props){
    super(props)
    this.state ={
      show: false
    }
  }

  toggleIngredients = () => {
    this.setState({
      show: !this.state.show
    })
  }

  handleData = (arr) => {
    this.props.handleData(arr)
    this.toggleIngredients()
  }

  render(){
    return (
      <div className='recipe-container'>
        <h2 onClick={this.toggleIngredients}>{this.props.name}</h2>
        {this.state.show &&
          <Ingredients
            name={this.props.name}
            ings={this.props.ings}
            index={this.props.index}
            handleData={this.handleData}/>}
      </div>
    )
  }
}

RecipeTitle.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  ings: PropTypes.array.isRequired,
  handleData: PropTypes.func.isRequired
}

export default RecipeTitle
