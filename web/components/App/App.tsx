/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import About from 'components/about/About';
import Home from 'components/home/Home';
import Landing from 'components/landing/Landing';
import NotFound from 'components/not-found/NotFound';
import Search from 'components/search/Search';

class App extends Component {
  public render() {
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
