import React from 'react'
import Button from './Button'

const Ingredients = ({ingredients, show}) => {
  if(!show){
    return null;
  }
    return (
      <div className='recipe-title'>
        <h3>Ingredients</h3>
        {ingredients.map((ingredient)=>
          <p key={ingredient}>{ingredient}</p>
        )}
        <Button name="Delete" buttonClass="delete"/>
        <Button name="Edit" buttonClass="edit"/>
      </div>
    )
}

export { Ingredients }
