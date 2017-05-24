import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const backdropStyle = {
  position:'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.7)',
  padding: 50
}

const modalStyle ={
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30
}

const Modal = (props) =>
  <div style={backdropStyle}>
    <div style={modalStyle}>
      <h1>{props.name}</h1>
      <br />
      <label>Recipe</label>
      <br />
      <input type='text'
        name={props.inputRecipeName}
        value={props.recipeValue}
        onChange={props.inputChange} />
      <br />
      <label>Ingredients</label>
      <br />
      <textarea
        name={props.inputIngredientsName}
        value={props.ingredientsValue}
        onChange={props.inputChange}>
      </textarea>
      <br />
      {(props.recipeValue.length === 0 ||
        props.ingredientsValue.length === 0) &&
        <Button name={props.buttonName}
          buttonClass='disabled'
          disabled={true} />
      }
      {(props.recipeValue.length > 0 &&
        props.ingredientsValue.length > 0) &&
        <Button name={props.buttonName}
          onClick={props.buttonAction}
          buttonClass="enabled"/>
      }
      <Button name="Close"
        onClick={props.onClose} />
    </div>
  </div>

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Modal
