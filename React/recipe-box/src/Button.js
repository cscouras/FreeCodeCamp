import React from 'react'

const Button = (props) =>
  <button className={props.buttonClass} onClick={props.onClick}>
    {props.name}
  </button>


export default Button;
