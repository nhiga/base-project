/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Login from '../login/Login';

import './landing.scss';

class Landing extends Component {
  public componentDidMount() {
    const landingHero = document.getElementById('landing-hero');
    if (landingHero) {
      const index = Math.floor(Math.random() * Math.floor(5));
      landingHero.style.backgroundImage = `url('/images/landing-${index}.jpg')`;
    }
  }

  public render() {
    return (
      <>
        <div id="landing-hero" className="landing__hero">
          {/* <h1 className="landing__hero-title">hello</h1>
          <Link to="/home">
            <button type="button" className="button__cta">
              let&#39;s get started
            </button>
          </Link> */}
          <Login />
        </div>
      </>
    );
  }
}

export default Landing;
