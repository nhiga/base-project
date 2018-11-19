const webpack = require('webpack');

module.exports = () => ({
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server'
  ],
  output: {
    publicPath: 'http://localhost:3001/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: 'localhost',
    port: 3001,
    historyApiFallback: true,
    hot: true
  },
  devtool: 'cheap-eval-source-map'
});