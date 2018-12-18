import http from 'http';
import path from 'path';

import ApplicationConfiguration from '../utils/application-configuration';
import { PORT, BUILD_FOLDER, PUBLIC_FOLDER } from '../utils/server.config';
import app from './app';

const templateName = ApplicationConfiguration.getFile(`${path.join(BUILD_FOLDER, PUBLIC_FOLDER)}/index.html`);
ApplicationConfiguration.compileTemplate(templateName);

const server = http.createServer(app);
let currentApp = app;
server.listen(PORT);

if (process && process.env && process.env.NODE_ENV === 'development') {
  console.info(`[index] Server is running at http://localhost:${PORT}`);
} else {
  console.info(`[index] Server is listening on port ${PORT}`);
}

// TODO: Add express error handler

// NOTE: module.hot is defined by Webpack & will only be defined in development mode
if (module.hot) {
  module.hot.accept('./app', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
