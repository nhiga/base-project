import compression from 'compression';
import express from 'express';
import path from 'path';

import { BUILD_FOLDER } from '../utils/server.config';
import shouldCompress from '../utils/server.utils';

const app = express();
app.use(compression({ filter: shouldCompress }));

app.use((req, res, next) => {
  // TODO: Replace console log with Logger component
  console.log(`URL: ${req.url}`); // eslint-disable-line
  next();
});

app.get('/api', (req, res) => {
  res.send({
    message: 'Test API v0.1.1'
  });
});

app.use(express.static(path.join(BUILD_FOLDER, 'public')));

export default app;
