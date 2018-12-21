/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { APP_TITLE } from 'utils/client.config';

import './footer.scss';

class Footer extends Component {
  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {
    title: APP_TITLE
  };

  constructor(props) {
    super(props);

    const today = new Date();
    const year = today.getFullYear();

    this.state = {
      year
    };
  }

  render() {
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
