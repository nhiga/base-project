// const path = require('path');
const StartServerPlugin = require('start-server-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const { IMAGES_FOLDER } = require('../../utils/server.config');

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
            name: '[name].[ext]',
            emitFile: false,
            publicPath: `http://localhost:3001/${IMAGES_FOLDER}/`
          }
        }
      }
    ]
  },
  plugins: [new StartServerPlugin('server.js'), new webpack.HotModuleReplacementPlugin()],
  devtool: 'cheap-eval-source-map'
});
