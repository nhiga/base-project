import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import App from './App';

// const rootReducer = { page: 'Default' };
// const store = createStore(rootReducer);

import '../style/base.scss';

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp();

// NOTE: module.hot will be defined in development mode only
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
