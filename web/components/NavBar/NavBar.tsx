/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

class NavBar extends Component {
  public render() {
    return (
      <div className="navbar">
        <div className="navbar__link">
          <NavLink exact to="/home">
            Home
          </NavLink>
        </div>
        <div className="navbar__link">
          <NavLink exact to="/search">
            Search
          </NavLink>
        </div>
        <div className="navbar__link">
          <NavLink exact to="/about">
            About
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
