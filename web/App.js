/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import Root from './Root/Root';
import NotFound from './NotFound/NotFound';

import Home from './Home/Home';
import Search from './Search/Search';
import About from './About/About';

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
