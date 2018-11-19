/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import logo from '../../images/react-logo.svg';

class Home extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="page-masthead">
          <h1 className="page-title">React Base Project</h1>
          <img className="page-masthead-logo" src={logo} alt="logo" />
        </div>
        <div className="page-main">
          To get started, edit web/home/Home.js and save to reload
        </div>
      </div>
    );
  }
}

export default Home;
