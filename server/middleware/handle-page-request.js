import React from 'react';
import { renderToString } from 'react-dom/server';
// import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import App from 'components/App';
import { HTTP_STATUS } from 'utils/server.config';
import ApplicationConfiguration from 'utils/application-configuration';

const handlePageRequest = (req, res) => {
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
    const page = ApplicationConfiguration.applyTemplate({ content });
    res.status(HTTP_STATUS.OK).send(page);
  } catch (err) {
    console.error(`[handle-page-request] (handlePageRequest) An unhandled exception occurred`, err);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(`An internal server error occurred`);
  }
};

export default handlePageRequest;
