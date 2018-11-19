const DEFAULT_PORT = 5000;

const PORT = process.env.PORT || DEFAULT_PORT;
const BUILD_FOLDER = '__build__';

module.exports.PORT = PORT;
module.exports.BUILD_FOLDER = BUILD_FOLDER;
