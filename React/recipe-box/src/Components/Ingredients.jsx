import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Modal from './Modal'

class Ingredients extends Component {
  constructor(props){
    super(props)
    this.state ={
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  deleteData = () => {
    let currentData = JSON.parse(localStorage.getItem('recipeList'))
    currentData.splice(this.props.index,1)
    this.props.handleData(currentData)
  }

  render(){
    const ings = this.props.ings
    return (
      <div className='ingredients-container'>
        <h3>Ingredients</h3>
        {ings.map((item)=> {
          return (
            <p key={item}>{item}</p>
          )
        })}
        <Button buttonClass='edit'
          name="Edit"
          onClick={this.toggleModal}/>
        {this.state.showModal &&
          <Modal
            name="Edit Recipe"
            onClose={this.toggleModal}
            handleData={this.props.handleData}
            recipeName={this.props.name}
            recipeIngredients={ings}/>
        }
        <Button buttonClass='delete'
          name="Delete"
          onClick={this.deleteData} />
      </div>
    )
  }
}

Ingredients.propTypes = {
  handleData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  ings: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
}

export default Ingredients
