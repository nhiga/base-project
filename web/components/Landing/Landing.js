/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './landing.scss';

/* eslint-disable no-unused-vars */
import landing1 from '../../images/landing-1.jpg';
import landing2 from '../../images/landing-2.jpg';
import landing3 from '../../images/landing-3.jpg';
import landing4 from '../../images/landing-4.jpg';
/* eslint-enable no-unused-vars */

class Landing extends Component {
  componentDidMount() {
    const landingHero = document.getElementById('landing-hero');
    if (landingHero) {
      const index = Math.floor(Math.random() * Math.floor(5));
      landingHero.style.backgroundImage = `url('/images/landing-${index}.jpg')`;
    }
  }

  render() {
    return (
      <>
        <div id="landing-hero" className="landing__hero">
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
