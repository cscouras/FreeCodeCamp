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
      isOpen: false}
  }

  _toggleModal = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    console.log(this.state.data, 'DATA LOG');
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
        <input type='text' placeholder="Recipe Name"></input>
        <br />
        <label>Ingredients</label>
        <br />
        <textarea placeholder="Enter Ingredients (Separated by commas)">

        </textarea>
        <br />
        <Button name="Add Recipe" />
      </Modal>
    </div>
    )
  }
}



export default App;
