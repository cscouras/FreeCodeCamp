import React from 'react'
import Button from './Button'


class DeleteRecipe extends React.Component {

  _deleteRecipe=(arr)=> {
    this.props.dataDelete(arr);
  }

  _handleClick = () => {
      const recipeList = this.props.data
      console.log(recipeList, this.props.index, '<-INDEX');
      recipeList.splice(this.props.index,1)
      console.log(recipeList, 'new List');
      this._deleteRecipe(recipeList)
  }

  render(){
    console.log(this.props.data);
    return (
        <Button name="Delete"
          buttonClass="delete"
          onClick={this._handleClick}/>
    )
  }
}


export default DeleteRecipe
