const path = require('path');
const nodeExternals = require('webpack-node-externals');

const { PUBLIC_FOLDER, IMAGES_FOLDER } = require('../../utils/server.config');

module.exports = () => ({
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: path.join(PUBLIC_FOLDER, IMAGES_FOLDER),
            publicPath: IMAGES_FOLDER,
            emitFile: false
          }
        }
      }
    ]
  },
  devtool: 'source-map'
});
