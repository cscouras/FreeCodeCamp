import React from 'react';
import Header from './Header';
import { RecipeContainer } from './RecipeContainer';
import Button from './Button'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {data : null}
  }

  componentWillMount() {
    const DATA = this.props.data
    let store;
    if(localStorage.length === 0){
      localStorage.setItem('recipeList', JSON.stringify(DATA))
      store = JSON.parse(localStorage.getItem('recipeList'))
      this.setState({data: store});
    } else {
      console.log('Already local storage');
      store = JSON.parse(localStorage.getItem('recipeList'))
      this.setState({data: store })
    }
    console.log(localStorage.length);
  }

  render() {
    console.log(this.state.data, 'DATA LOG');
    return (
      <div className="app">
        <Header />
        <RecipeContainer recipes={this.state.data}/>
        <Button name="Add Recipe"></Button>
      </div>
    )
  }
}



export default App;
