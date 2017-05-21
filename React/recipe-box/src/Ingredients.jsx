import React from 'react'
import Button from './Button'

const Ingredients = ({ingredients, hide}) => {
  let cssClasses = `${hide} recipe-title`
    return (
      <div className={cssClasses}>
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
