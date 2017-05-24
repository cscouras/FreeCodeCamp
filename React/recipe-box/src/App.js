import React from 'react';
import Header from './Header';
import { RecipeContainer } from './RecipeContainer';
import Button from './Button'
import Modal from './Modal'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data : JSON.parse(localStorage.getItem('recipeList')),
      isOpen: false,
      newRecipe: '',
      newIngredients: ''}
  }

  _toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      newRecipe: '',
      newIngredients: ''
    })
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  _addRecipe = () => {
    const prevList = JSON.parse(localStorage.getItem('recipeList'));
    console.log('previous', prevList);
    let ingStr = this.state.newIngredients
    let reg = /\s*,\s/
    let ingToArr = ingStr.split(reg)
    const newRec = {
      id: prevList.length,
      title: this.state.newRecipe,
      ingredients: ingToArr
    }
    prevList.push(newRec)
    localStorage.setItem('recipeList', JSON.stringify(prevList))
    this.setState({
      data: prevList
    })
    this._toggleModal()
  }

  render() {
    return (
      <div className="app">
        <Header />
        <RecipeContainer recipes={this.state.data}/>
        <Button name="Add Recipe" onClick={this._toggleModal}></Button>

      {this.state.isOpen &&
      <Modal
        onClose={this._toggleModal}
        name="Add Recipe"
        recipeValue={this.state.newRecipe}
        inputRecipeName="newRecipe"
        inputChange={this.handleInputChange}
        inputIngredientsName="newIngredients"
        ingredientsValue={this.state.newIngredients}
        buttonName="Add Recipe"
        buttonClass="disabled"
        buttonAction={this._addRecipe}/>
      }
    </div>
    )
  }
}



export default App;
