import React from 'react';
import { hydrate } from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux';

import App from './App';

// const rootReducer = { page: 'Default' };
// const store = createStore(rootReducer);

import '../style/base.scss';

const renderApp = renderFn => {
  renderFn(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

renderApp(hydrate);

// NOTE: module.hot will be defined in development mode only
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
