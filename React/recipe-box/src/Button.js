import React from 'react'

const Button = (props) =>
  <button className={props.buttonClass}
    onClick={props.onClick}
    disabled={props.disabled}>
    {props.name}
  </button>


export default Button;
