const DEFAULT_PORT = 5000;
const PORT = process.env.PORT || DEFAULT_PORT;

const BUILD_FOLDER = "__build__";
const PUBLIC_FOLDER = "public";
const JS_FOLDER = "js";
const CSS_FOLDER = "css";
const IMAGES_FOLDER = "images";

const HTTP_STATUS = {
  OK: 200,
  INTERNAL_SERVER_ERROR: 500
};

module.exports.PORT = PORT;

module.exports.BUILD_FOLDER = BUILD_FOLDER;
module.exports.PUBLIC_FOLDER = PUBLIC_FOLDER;
module.exports.JS_FOLDER = JS_FOLDER;
module.exports.CSS_FOLDER = CSS_FOLDER;
module.exports.IMAGES_FOLDER = IMAGES_FOLDER;

module.exports.HTTP_STATUS = HTTP_STATUS;
