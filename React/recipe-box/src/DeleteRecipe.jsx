import React from 'react'
import Button from './Button'


class DeleteRecipe extends React.Component {

  _deleteRecipe=(arr)=> {
    this.props.dataDelete(arr);
  }
  _handleClick = () => {
      console.log(this.props.data);
      const prevList = this.props.data
      prevList.splice(this.props.index,1)
      localStorage.setItem('recipeList', JSON.stringify(prevList))
      this._deleteRecipe(prevList)
  }

  render(){
    return (
        <Button name="Delete"
          buttonClass="delete"
          onClick={this._handleClick}/>
    )
  }
}


export default DeleteRecipe
