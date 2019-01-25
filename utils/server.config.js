/**
 * This file is in CommonJS format so it can be used by Webpack as-is
 */

// Port configuration
const DEFAULT_PORT = 5000;
module.exports.PORT = process.env.PORT || DEFAULT_PORT;
module.exports.DEV_SERVER_PORT = 3001;

// Folder configuration
module.exports.BUILD_FOLDER = '__build__';
module.exports.CSS_FOLDER = 'css';
module.exports.FONTS_FOLDER = 'fonts';
module.exports.IMAGES_FOLDER = 'images';
module.exports.JS_FOLDER = 'js';
module.exports.PUBLIC_FOLDER = 'public';

// HTTP status codes
module.exports.HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501
};
