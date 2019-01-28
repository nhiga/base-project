/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import './page-content.scss';

class PageContent extends Component {
  public render() {
    const { children } = this.props;

    return (
      <div className="page-content">
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default PageContent;
