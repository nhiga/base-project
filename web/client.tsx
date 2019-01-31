import React from 'react';
import { hydrate, render, Renderer } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/app/App';
import configureStore from 'state/redux/store';

import 'styles/main.scss';

declare global {
  interface Window {
    __PRELOADED_STATE__: any;
  }
}

let initialState;
let isServerRendered = false;
if (window.__PRELOADED_STATE__ && window.__PRELOADED_STATE__ !== '{{{state}}}') {
  initialState = JSON.parse(window.__PRELOADED_STATE__);
  isServerRendered = true;
}
delete window.__PRELOADED_STATE__;

// TODO: Remove preloaded state script element

const store = configureStore(initialState);

const renderApp = (renderFn: Renderer) => {
  renderFn(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

if (isServerRendered) {
  console.log(`[client] hydrating`);
  renderApp(hydrate);
} else {
  console.log(`[client] rendering`);
  renderApp(render);
}

// NOTE: module.hot is defined by Webpack & will only exist in development mode
if (module.hot) {
  module.hot.accept('./components/app/App', () => {
    renderApp(hydrate);
  });
}
