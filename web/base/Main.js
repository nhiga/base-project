import PropTypes from 'prop-types';
import React from 'react';

const Main = props => {
  const { children } = props;
  return <div className="main">{children}</div>;
};

Main.propTypes = {
  children: PropTypes.element.isRequired
};

export default Main;
