import React from 'react';
import { hydrate } from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux';

import App from 'components/App';

// const rootReducer = { page: 'Default' };
// const store = createStore(rootReducer);

import 'styles/base.scss';

const renderApp = () => {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

renderApp();

// NOTE: module.hot will be defined in development mode only
if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp();
  });
}
