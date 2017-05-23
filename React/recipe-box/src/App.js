import React from 'react';
import Header from './Header';
import { RecipeContainer } from './RecipeContainer';
import Button from './Button'
import {Modal} from './Modal'
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

  _toggleModal = (e) => {
    e.preventDefault();
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

  }

  render() {
    console.log(this.state.data, 'DATA LOG');
    console.log(this.state.newRecipe);
    console.log(this.state.newIngredients);
    return (
      <div className="app">
        <Header />
        <RecipeContainer recipes={this.state.data}/>
        <Button name="Add Recipe" onClick={this._toggleModal}></Button>

      <Modal show={this.state.isOpen}
        onClose={this._toggleModal}>
        <h1>Add Recipe</h1>
        <label>Recipe</label>
        <br />
        <input type='text'
          placeholder="Recipe Name"
          name="newRecipe"
          value={this.state.newRecipe}
          onChange={this.handleInputChange} />
        <br />
        <label>Ingredients</label>
        <br />
        <textarea placeholder="Enter Ingredients (Separated by commas)"
          name="newIngredients"
          value={this.state.newIngredients}
          onChange={this.handleInputChange}>

        </textarea>
        <br />
        <Button name="Add Recipe" onClick={this._addRecipe} />
      </Modal>
    </div>
    )
  }
}



export default App;
