import React from 'react'

const Button = props => {
  const _onClick = () => {
    if(props.id.toLowerCase() === 'clear'){
      props.handleButtonClick('clear')
    } else if(props.id.toLowerCase() === 'random'){
      props.handleButtonClick('random')
    } else {
      props.handleButtonClick()
    }
  }
  return <button className='btn' onClick={_onClick}>
    {props.id}
  </button>
}

export default Button
