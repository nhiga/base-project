import compression from 'compression';
import express from 'express';
import path from 'path';

import ApplicationConfiguration from 'utils/application-configuration';
import { BUILD_FOLDER, CSS_FOLDER, FONTS_FOLDER, IMAGES_FOLDER, JS_FOLDER, PUBLIC_FOLDER } from 'utils/server.config';
import { shouldCompress } from 'utils/server.utils';
import pageController from './controllers/page-controller';
import restRouter from './routes/rest-router';

const app = express();
// Compile the page template used for rendering. NOTE: This only happens on server startup
const template = ApplicationConfiguration.getFile(`${path.join(BUILD_FOLDER, PUBLIC_FOLDER)}/index.html`);
ApplicationConfiguration.compileTemplate(template);

//#region MIDDLEWARE
app.use(compression({ filter: shouldCompress }));
app.use((req, res, next) => {
  // TODO: Replace console log with Logger component
  console.log(`[app] Method: ${req.method}, URL: ${req.url}`); // eslint-disable-line
  next();
});
//#endregion MIDDLEWARE

//#region STATIC ASSETS
app.use('/css', express.static(path.join(BUILD_FOLDER, PUBLIC_FOLDER, CSS_FOLDER)));
app.use('/images', express.static(path.join(BUILD_FOLDER, PUBLIC_FOLDER, IMAGES_FOLDER)));
app.use('/fonts', express.static(path.join(BUILD_FOLDER, PUBLIC_FOLDER, FONTS_FOLDER)));
app.use('/js', express.static(path.join(BUILD_FOLDER, PUBLIC_FOLDER, JS_FOLDER)));
//#endregion STATIC ASSETS

// REST API ROUTES
app.use('/api', restRouter);

// WEB PAGE REQUEST HANDLER
app.get('*', pageController);

// TODO: Add express error handler

export default app;
