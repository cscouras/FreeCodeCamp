import React from 'react'
import PropTypes from 'prop-types'

const Form = (props) => {
  const handleInputChange = (e)=>{
    const target = e.target
    const name = target.name
    const value = target.value
    props.onChange(name, value)
  }

  const disableEnter = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault()
    }
  }

  return (
    <form onKeyPress={disableEnter}>
      <label>
        Recipe:
      </label>
      <br />
      <input type='text'
        className='input-text'
        name="title"
        value={props.recipeName}
        placeholder="Add Recipe Name"
        onChange={handleInputChange} />
      <br />
      <label>
        Ingredients:
      </label>
      <br />
      <textarea
        className='textarea'
        name="ingredients"
        value={props.recipeIngredients}
        placeholder="Add Ingredients separated by a comma"
        onChange={handleInputChange} />
      <br/>
    </form>
  )
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  recipeName: PropTypes.string,
  recipeIngredients: PropTypes.array
}

export default Form
