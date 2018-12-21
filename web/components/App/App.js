/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import About from 'components/About';
import Home from 'components/Home';
import Landing from 'components/Landing';
import NotFound from 'components/NotFound';
import Search from 'components/Search';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path="/about" exact component={About} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

// export default App;
export default hot(module)(App);
