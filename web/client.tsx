import React from 'react';
import { hydrate, render, Renderer } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from 'components/app/App';
import sessionReducer, { initialState as sessionInitialState } from 'state/redux/reducers/session-reducer';
import userReducer, { initialState as userInitialState } from './state/redux/reducers/user-reducer';

import 'styles/main.scss';

declare global {
  interface Window {
    __PRELOADED_STATE__: any;
  }
}

const initialState = {
  session: sessionInitialState,
  user: userInitialState
};

// TODO: Get initial state from server via window object
const store = createStore(
  combineReducers({ session: sessionReducer, user: userReducer }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

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

if (window.__PRELOADED_STATE__) {
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
