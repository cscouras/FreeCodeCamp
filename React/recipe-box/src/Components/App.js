import React, { Component } from 'react'
import Header from './Header'
import Button from './Button'
import RecipeTitle from './RecipeTitle'
import Modal from './Modal'
import '../style/App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: JSON.parse(localStorage.getItem('recipeList')),
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  handleData = (arr) => {
    localStorage.setItem('recipeList', JSON.stringify(arr))
    this.setState({
      data: arr
    })
  }

  render (){
    const recipes = this.state.data
    return (
      <div className='app'>
        <Header />
        {recipes.map((recipe)=>{
          const name = recipe.title
          const ings = recipe.ingredients
          const index = recipes.findIndex((item, i)=>{
            return item.title === name
          })
          return(
            <RecipeTitle
              key={index}
              index={index}
              name={name}
              ings={ings}
              handleData={this.handleData}/>
        )
        })}
        <Button buttonClass="add" name='Add Recipe' onClick={this.toggleModal}/>
        {this.state.showModal &&
          <Modal
            name="Add Recipe"
            recipeName=''
            recipeIngredients=''
            onClose={this.toggleModal}
            handleData={this.handleData}/>}
      </div>
    )
  }
}

export default App
