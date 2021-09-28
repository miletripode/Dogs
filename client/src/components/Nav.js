import React from 'react';
import Search from './Search';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <li >
            <NavLink className={styles.link} exact to="/" >Home</NavLink>
          </li>
          <li >
            <NavLink className={styles.link} to="/creating">Creating Breed</NavLink>
          </li>
          <li>
            <Search/>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;
  