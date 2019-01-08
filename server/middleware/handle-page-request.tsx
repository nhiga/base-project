import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
// import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import App from 'components/app/App';
import { HTTP_STATUS } from 'utils/server.config';
import ApplicationConfiguration from 'utils/application-configuration';

const handlePageRequest = (req: express.Request, res: express.Response) => {
  try {
    // const initialState = getInitialState(oToken, visitId, iToken, branch);
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
      console.error(`[handle-page-request] (handlePageRequest) Page not rendered`);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(`An internal server error occurred`);
    }
  } catch (err) {
    console.error(`[handle-page-request] (handlePageRequest) An unhandled exception occurred`, err);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(`An internal server error occurred`);
  }
};

export default handlePageRequest;
