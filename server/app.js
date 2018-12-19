import compression from 'compression';
import express from 'express';
import path from 'path';

import {
  BUILD_FOLDER,
  CSS_FOLDER,
  FONTS_FOLDER,
  IMAGES_FOLDER,
  JS_FOLDER,
  PUBLIC_FOLDER,
  HTTP_STATUS
} from 'utils/server.config';
import { shouldCompress } from 'utils/server.utils';
import pkg from '../package.json';
import handlePageRequest from './middleware/handle-page-request';

const app = express();
app.use(compression({ filter: shouldCompress }));

app.use((req, res, next) => {
  // TODO: Replace console log with Logger component
  console.log(`[app] Requested URL: ${req.url}`); // eslint-disable-line
  next();
});

app.use('/css', express.static(path.join(BUILD_FOLDER, PUBLIC_FOLDER, CSS_FOLDER)));
app.use('/images', express.static(path.join(BUILD_FOLDER, PUBLIC_FOLDER, IMAGES_FOLDER)));
app.use('/fonts', express.static(path.join(BUILD_FOLDER, PUBLIC_FOLDER, FONTS_FOLDER)));
app.use('/js', express.static(path.join(BUILD_FOLDER, PUBLIC_FOLDER, JS_FOLDER)));

app.get('/api', (req, res) => {
  res.status(HTTP_STATUS.OK).send({
    version: `${pkg.version}`,
    message: 'Sample API'
  });
});

app.get('*', handlePageRequest);

export default app;
