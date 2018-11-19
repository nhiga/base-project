const StartServerPlugin = require('start-server-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = () => ({
  entry: ['webpack/hot/poll?1000'],
  watch: true,
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
    })
  ],
  plugins: [
    new StartServerPlugin('server.js'),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-eval-source-map'
});
