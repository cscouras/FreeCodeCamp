import React from 'react';
import logo from './logo.svg';

function Header (){
  return (
    <div className="app-header">
      <Logo />
      <h2>React Recipe Box</h2>
    </div>
  )
}

function Logo (){
  return (
    <img src={ logo } className="app-logo" alt="logo" />
  )
}

export default Header;
