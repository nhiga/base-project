/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import './home.scss';

import logo from '../../images/react-logo.svg';

class Home extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="home-masthead">
          <h1 className="home-title">React Base Project</h1>
          <img className="home-masthead-logo" src={logo} alt="logo" />
        </div>
        <div className="home-main">
          To get started, edit web/home/Home.js and save to reload
        </div>
      </div>
    );
  }
}

export default Home;
