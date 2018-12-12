/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Header from '../base/Header';

import './home.scss';

import splash from '../../images/landing-splash.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home__splash">
          <h1 className="home__splash-title">splash title</h1>
          <img className="home__splash-image" src={splash} alt="splash" />
        </div>
        <div className="page__content--center">
          <span>Home page content</span>
        </div>
      </div>
    );
  }
}

export default Home;
