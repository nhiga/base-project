/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import Root from './base/Root';
import NotFound from './base/NotFound';

import Home from './home/Home';
import Search from './search/Search';
import About from './about/About';

class App extends Component {
  render() {
    return (
      <Root>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/about" exact component={About} />
          <Route component={NotFound} />
        </Switch>
      </Root>
    );
  }
}

// export default App;
export default hot(module)(App);
