import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
// import { matchRoutes } from "react-router-config";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from 'components/app/App';
import sessionReducer, { initialState as sessionInitialState } from 'state/redux/reducers/session-reducer';
import userReducer, { initialState as userInitialState } from 'state/redux/reducers/user-reducer';
import { HTTP_STATUS } from 'utils/server.config';
import ApplicationConfiguration from 'utils/application-configuration';

const pageController = (req: express.Request, res: express.Response) => {
  try {
    // TODO: Retrieve CMS content
    // const branch = matchRoutes(routes, req.originalUrl)
    // const initialState = getInitialState(branch);
    const initialState = {
      session: {
        ot: 'DEFAULT_SERVER_TOKEN'
      },
      user: userInitialState
    };

    const store = createStore(
      combineReducers({ session: sessionReducer, user: userReducer }),
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
    );
    const context = {};
    const content = renderToString(
      <StaticRouter location={req.url} context={context}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );
    const page = ApplicationConfiguration.renderTemplate({ state: JSON.stringify(store.getState()), content });

    if (page) {
      res.status(HTTP_STATUS.OK).send(page);
    } else {
      console.error(`[page-controller] (pageController) Page not rendered`);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(`An internal server error occurred`);
    }
  } catch (err) {
    console.error(`[page-controller] (pageController) An unhandled exception occurred`, err);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(`An internal server error occurred`);
  }
};

export default pageController;
