import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, RouteProps, withRouter, RouteComponentProps } from 'react-router-dom';

import { AppState } from 'state/redux/store';

interface PrivateRouteProps extends RouteComponentProps {
  isAuthenticated?: boolean;
}

const PrivateRoute = ({
  component: Component,
  location,
  isAuthenticated = false,
  ...rest
}: PrivateRouteProps & RouteProps) => (
  <>
    {isAuthenticated ? (
      <Route path={location.pathname} component={Component} {...rest} />
    ) : (
      <Redirect
        to={{
          pathname: '/',
          state: { from: location }
        }}
      />
    )}
  </>
);

const mapStateToProps = (state: AppState) => {
  return {
    isAuthenticated: state.session.isAuthenticated
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(PrivateRoute)
);
