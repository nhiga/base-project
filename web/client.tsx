import React from 'react';
import { hydrate } from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux';

import App from 'components/app/App';

// const rootReducer = { page: 'Default' };
// const store = createStore(rootReducer);

import 'styles/main.scss';

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
  module.hot.accept('./components/app/App', () => {
    renderApp();
  });
}
