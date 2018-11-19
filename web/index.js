import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import App from './App';

import '../style/main.scss';

// const rootReducer = { page: 'Default' };
// const store = createStore(rootReducer);

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);

// NOTE: module.hot will be defined in development mode only
if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
