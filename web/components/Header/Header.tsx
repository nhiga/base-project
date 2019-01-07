/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavBar from 'components/NavBar';
import { APP_TITLE } from 'utils/client.config';

import './header.scss';

import logo from 'images/react-logo.svg';

interface IHeaderProps {
  title?: string;
}

class Header extends Component<IHeaderProps> {
  private static defaultProps = {
    title: APP_TITLE
  };

  public render() {
    const { title } = this.props;

    return (
      <header className="header">
        <div className="header__spacer" />
        <div className="header__area">
          <div className="header__content">
            <div className="header__title">
              <img className="header__title-logo" src={logo} alt="logo" />
              <span className="header__title-text">
                <Link to="/">{title}</Link>
              </span>
            </div>
            <NavBar />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
