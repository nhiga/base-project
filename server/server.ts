import http from 'http';

import { PORT } from 'utils/server.config';
import app from './app';

// TODO: Setup logger

const server = http.createServer(app);
let currentApp = app;
server.listen(PORT, () => {
  if (process && process.env && process.env.NODE_ENV === 'development') {
    console.info(`[server] Server is running at http://localhost:${PORT}`);
  } else {
    console.info(`[server] Server is listening on port ${PORT}`);
  }
});

// NOTE: module.hot is defined by Webpack & will only exist in development mode
if (module.hot) {
  module.hot.accept('./app', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
