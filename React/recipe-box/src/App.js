import React, { Component } from 'react'
import Header from './Header'
import Button from './Button'
import Modal from './Modal'
import './App.css'

class RecipeTitle extends Component {
  constructor(props){
    super(props)
    this.state ={
      show: false
    }
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  sendDataToParent = (arr) => {
    this.props.handleData(arr)
  }

  getDataFromIng = (arr) => {
    this.sendDataToParent(arr)
    this.setState({
      show: !this.state.show
    })
  }


  render(){
    return (
      <div className='recipe-container'>
        <h2 onClick={this.handleClick}>{this.props.name}</h2>
        {this.state.show &&
          <Ingredients
            name={this.props.name}
            ings={this.props.ings}
            index={this.props.index}
            handleData={this.getDataFromIng}/>}
      </div>
    )
  }

}

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
    console.log(currentData[this.props.index]);
    currentData.splice(this.props.index,1)
    console.log(currentData);
    this.sendData(currentData)
  }


  sendData = (arr) => {
    this.props.handleData(arr)
  }

  render(){
    const ings = this.props.ings
    return (
      <div className='recipe-title'>
        <h3>Ingredients</h3>
        {ings.map((item)=> {
          return (
            <p key={item}>{item}</p>
          )
        })}
        <Button buttonClass='edit'
          name="Edit Recipe"
          onClick={this.toggleModal}/>
        {this.state.showModal &&
          <Modal
            name="Edit Recipe"
            onClose={this.toggleModal}
            handleData={this.sendData}
            recipeName={this.props.name}
            recipeIngredients={ings}/>
        }
        <Button buttonClass='delete'
          name="Delete Recipe"
          onClick={this.deleteData} />
      </div>
    )
  }
}


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: JSON.parse(localStorage.getItem('recipeList')),
      showModal: false
    }
  }

  toggleModal =()=>{
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

export default App;
