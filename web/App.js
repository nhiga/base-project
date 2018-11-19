/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Root from './base/Root';
import NotFound from './base/NotFound';

import Home from './home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Root>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Root>
      </Router>
    );
  }
}

export default App;
