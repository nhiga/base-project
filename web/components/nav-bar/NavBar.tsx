/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './nav-bar.scss';

class NavBar extends Component {
  public render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="navbar__link">
            <NavLink exact to="/home">
              Home
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink exact to="/search">
              Search
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink exact to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
