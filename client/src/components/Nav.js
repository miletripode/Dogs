import React from 'react';
import Search from './Search';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
      <nav className="navbar">
        <div></div>
        <NavLink className="link" exact to="/" >Home</NavLink>
        <NavLink className="link" to="/creating" >Creating Breed</NavLink>
        <Search className="search"/>
      </nav>
    );
  };
  
  export default Nav;
  