/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { APP_TITLE } from '../../utils/client.config';

import logo from '../../images/react-logo.svg';

import './header.scss';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {
    title: APP_TITLE
  };

  render() {
    const { title } = this.props;

    return (
      <header>
        <div className="header__spacer" />
        <div className="header">
          <div className="header__title">
            <img className="header__title-logo" src={logo} alt="logo" />
            <span className="header__title-text">{title}</span>
          </div>
          <div className="header__nav">
            <div className="header__nav-link">
              <Link to="/">Home</Link>
            </div>
            <div className="header__nav-link">
              <Link to="/search">Search</Link>
            </div>
            <div className="header__nav-link">
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
