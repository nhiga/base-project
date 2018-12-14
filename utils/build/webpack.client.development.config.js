const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

const { DEV_SERVER_PORT } = require('../server.config');

module.exports = () => ({
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${DEV_SERVER_PORT}`,
    'webpack/hot/only-dev-server'
  ],
  output: {
    publicPath: `http://localhost:${DEV_SERVER_PORT}/`
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin(), new WriteFilePlugin()],
  devServer: {
    host: 'localhost',
    port: DEV_SERVER_PORT,
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  devtool: 'cheap-eval-source-map'
});
