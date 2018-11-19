import http from 'http';

import app from './server';
import { PORT } from '../utils/server.config';

const server = http.createServer(app);
let currentApp = app;
server.listen(PORT);
console.log(`Server is listening on port ${PORT}`); // eslint-disable-line no-console

// NOTE: module.hot will be defined in development mode only
if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
