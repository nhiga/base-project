import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
// import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
// import { matchRoutes } from "react-router-config";
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

import App from 'components/app/App';
import { HTTP_STATUS } from 'utils/server.config';
import ApplicationConfiguration from 'utils/application-configuration';

const pageController = (req: express.Request, res: express.Response) => {
  try {
    // const branch = matchRoutes(routes, req.originalUrl)
    // const initialState = getInitialState(branch);
    // const store = createStore(
    //   reducers,
    //   initialState,
    //   composeWithDevTools(applyMiddleware(thunk))
    // );
    const context = {};
    const content = renderToString(
      <StaticRouter location={req.url} context={context}>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </StaticRouter>
    );
    const page = ApplicationConfiguration.renderTemplate({ content });

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
