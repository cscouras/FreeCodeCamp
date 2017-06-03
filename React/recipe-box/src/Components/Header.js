import React from 'react'
import logo from './logo.svg'

function Header (){
  return (
    <div className="app-header">
      <Logo />
      <h1>React Recipe Box</h1>
    </div>
  )
}

function Logo (){
  return (
    <img src={ logo } className="app-logo" alt="logo" />
  )
}

export default Header
