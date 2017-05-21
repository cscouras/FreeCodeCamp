import React from 'react';
import Header from './Header';
import { RecipeContainer } from './RecipeContainer';
import Button from './Button'
import './App.css';

const App = ({data}) =>
  <div className="app">
    <Header />
    <RecipeContainer recipes={data}/>
    <Button name="Add Recipe"></Button>
  </div>


export default App;
