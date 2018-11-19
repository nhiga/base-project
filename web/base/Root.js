import PropTypes from 'prop-types';
import React from 'react';

const Root = props => {
  const { children } = props;
  return <div>{children}</div>;
};

Root.propTypes = {
  children: PropTypes.node.isRequired
};

export default Root;
