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
      data : JSON.parse(this.props.data),
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
        <Button name="Add Recipe" />
      </Modal>
    </div>
    )
  }
}



export default App;
