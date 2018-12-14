const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CSS_FOLDER } = require('../server.config');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${CSS_FOLDER}/[name].css`
    })
  ],
  devtool: 'source-map'
});
