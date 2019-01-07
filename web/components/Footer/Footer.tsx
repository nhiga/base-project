/* eslint-disable react/prefer-stateless-function */
// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { APP_TITLE } from 'utils/client.config';

import './footer.scss';

interface IFooterProps {
  title?: string;
}

interface IFooterState {
  year: number;
}

class Footer extends Component<IFooterProps, IFooterState> {
  private static defaultProps = {
    title: APP_TITLE
  };

  constructor(props: IFooterProps) {
    super(props);

    const today = new Date();
    const year = today.getFullYear();

    this.state = {
      year
    };
  }

  public render() {
    const { year } = this.state;
    const { title } = this.props;

    return (
      <footer className="footer">
        <span>&copy; {`${year} ${title}`}</span>
      </footer>
    );
  }
}

export default Footer;
