// const path = require('path');
const StartServerPlugin = require('start-server-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

// const { DEV_SERVER_PORT, IMAGES_FOLDER } = require('../server.config');

module.exports = () => ({
  entry: ['webpack/hot/poll?1000'],
  watch: true,
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
            emitFile: false,
            publicPath: `/`
          }
        }
      }
    ]
  },
  plugins: [new StartServerPlugin('server.js'), new webpack.HotModuleReplacementPlugin()],
  devtool: 'source-map'
});
