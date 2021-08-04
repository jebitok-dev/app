import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <div className="nav">
    <NavLink
      exact
      to="/"
      activeClassName="activeRoute"
      activeStyle={{ backgroundColor: 'rgb(142, 255, 142)' }}
      className="lii"
    >
      HOME
    </NavLink>
    <NavLink
      to="/overview"
      exact
      activeClassName="activeRoute"
      activeStyle={{ backgroundColor: 'rgb(142, 255, 142)' }}
      className="lii"
    >
      OVERVIEW
    </NavLink>
    <NavLink
      exact
      to="/shop"
      className="lii"
      activeClassName="activeRoute"
      activeStyle={{ backgroundColor: 'rgb(142, 255, 142)' }}
    >
      SHOP
    </NavLink>
    <NavLink
      exact
      to="/book"
      className="lii"
      activeClassName="activeRoute"
      activeStyle={{ backgroundColor: 'rgb(142, 255, 142)' }}
    >
      BOOK
    </NavLink>
  </div>
);

export default Navbar;
