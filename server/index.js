import http from 'http';

import app from './app';
import { PORT } from '../utils/server.config';

const server = http.createServer(app);
let currentApp = app;
server.listen(PORT);
console.log(`Server is listening on port ${PORT}`); // eslint-disable-line no-console

// NOTE: module.hot is defined by Webpack & will only be defined in development mode
if (module.hot) {
  module.hot.accept('./app', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
