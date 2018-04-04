import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => (
  <ul>
    <li>
      <NavLink activeClassName="active" exact={true} to="/">Home</NavLink>      
    </li>
    <li>
      <NavLink to="/admin">Admin</NavLink>
    </li>
  </ul>
);

export default NavBar;