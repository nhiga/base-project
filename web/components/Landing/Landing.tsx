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
          <Login />
        </div>
      </>
    );
  }
}

export default Landing;
