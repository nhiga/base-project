/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Root from './base/Root';
import Sidebar from './base/Sidebar';
import Main from './base/Main';
import NotFound from './base/NotFound';

import Home from './home/Home';
import Login from './user/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Root>
          <Sidebar />
          <Main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route component={NotFound} />
            </Switch>
          </Main>
        </Root>
      </Router>
    );
  }
}

export default App;
