/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './landing.scss';

class Landing extends Component {
  render() {
    return (
      <>
        <div className="landing__hero">
          <h1 className="landing__hero-title">hello</h1>
          <Link to="/home">
            <button type="button" className="button__cta">
              let&#39;s get started
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default Landing;
