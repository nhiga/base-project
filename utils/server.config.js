// Port configuration
const DEFAULT_PORT = 5000;
const PORT = process.env.PORT || DEFAULT_PORT;
const DEV_SERVER_PORT = 3001;

// Build output
const BUILD_FOLDER = '__build__';
const CSS_FOLDER = 'css';
const FONTS_FOLDER = 'fonts';
const IMAGES_FOLDER = 'images';
const JS_FOLDER = 'js';
const PUBLIC_FOLDER = 'public';

// HTTP status codes
const HTTP_STATUS = {
  OK: 200,
  INTERNAL_SERVER_ERROR: 500
};

module.exports.PORT = PORT;
module.exports.DEV_SERVER_PORT = DEV_SERVER_PORT;

module.exports.BUILD_FOLDER = BUILD_FOLDER;
module.exports.CSS_FOLDER = CSS_FOLDER;
module.exports.FONTS_FOLDER = FONTS_FOLDER;
module.exports.IMAGES_FOLDER = IMAGES_FOLDER;
module.exports.JS_FOLDER = JS_FOLDER;
module.exports.PUBLIC_FOLDER = PUBLIC_FOLDER;

module.exports.HTTP_STATUS = HTTP_STATUS;
