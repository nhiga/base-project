/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Header from '../base/Header';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="page__content--center">
          <span>About page content</span>
        </div>
      </div>
    );
  }
}

export default About;
