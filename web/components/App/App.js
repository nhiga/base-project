/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import About from 'components/About';
import Home from 'components/Home';
import NotFound from 'components/NotFound';
import Root from 'components/Root';
import Search from 'components/Search';

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
