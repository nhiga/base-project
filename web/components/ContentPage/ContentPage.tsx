/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import './content-page.scss';

class ContentPage extends Component {
  public render() {
    const { children } = this.props;

    return (
      <div className="content-page">
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default ContentPage;