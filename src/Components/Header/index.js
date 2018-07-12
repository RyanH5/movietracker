import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <div className="header-section">
      <h1 className="App-title">Movie Tracker</h1>
      <NavLink to="/login" className="nav">Login/SignUp</NavLink>
      
    </div>
  )
}

export default Header;