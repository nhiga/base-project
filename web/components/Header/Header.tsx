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
  public state = {
    isMobileNavOpen: false
  };
  private static defaultProps = {
    title: APP_TITLE
  };
  private handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ isMobileNavOpen: !this.state.isMobileNavOpen });
  };
  public render() {
    const { isMobileNavOpen } = this.state;
    const { title } = this.props;

    return (
      <>
        <header className="header">
          <div className="header__spacer" />
          <div className="header__visible">
            <div className="header__content">
              <div className="header__title">
                <img className="header__title-logo" src={logo} alt="logo" />
                <span className="header__title-text">
                  <Link id="header__landing-link" to="/">
                    {title}
                  </Link>
                </span>
              </div>
              <button id="header__menu-btn" className="header__menu-btn" onClick={this.handleMenuClick}>
                <i id="header__menu-btn-icon" className={`fas ${isMobileNavOpen ? 'fa-times' : 'fa-bars'}`} />
              </button>
              <div className="header__inline-nav">
                <NavBar />
              </div>
            </div>
          </div>
        </header>
        <div id="header__mobile-nav" className={`header__mobile-nav${isMobileNavOpen ? ' open' : ''}`}>
          <NavBar />
        </div>
      </>
    );
  }
}

export default Header;
