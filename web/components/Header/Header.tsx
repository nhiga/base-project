import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavBar from 'components/nav-bar/NavBar';
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
        <div className="header__visible">
          <div className="header__content">
            <div className="header__title">
              <img className="header__title-logo" src={logo} alt="logo" suppressHydrationWarning={true} />
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
