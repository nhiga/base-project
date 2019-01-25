import React from 'react';
import { hydrate } from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

import App from 'components/app/App';

// TODO: Get initial state from server via window object
// const store = createStore(
//   reducers,
//   initialState,
//   composeWithDevTools(applyMiddleware(thunk))
// );

import 'styles/main.scss';

const renderApp = () => {
  hydrate(
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </BrowserRouter>,
    document.getElementById('root')
  );
};

renderApp();

// NOTE: module.hot is defined by Webpack & will only exist in development mode
if (module.hot) {
  module.hot.accept('./components/app/App', () => {
    renderApp();
  });
}
