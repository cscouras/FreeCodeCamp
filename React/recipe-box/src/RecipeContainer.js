import React from 'react'
import { RecipeTitle } from './RecipeTitle'

const RecipeContainer = ({recipes}) =>
  <div className="recipe-container">
    {recipes.map((recipe) =>
      <RecipeTitle key={recipe.id} recipe={recipe} data={recipes}/>
    )}
  </div>

export { RecipeContainer };
