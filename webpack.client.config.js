const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const { BUILD_FOLDER } = require('./utils/server.config');

const modeConfig = mode =>
  require(`./utils/build/webpack.client.${mode}.config`)(mode);
const presetConfig = require('./utils/build/loadPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  // TODO: Replace console log with Logger component
  console.log(`Client is building in ${mode} mode`); // eslint-disable-line no-console
  console.log(`Client is processing ${presets || 'no'} presets`); // eslint-disable-line no-console
  return webpackMerge(
    {
      mode,
      target: 'web',
      entry: ['./web/index.js'],
      output: {
        filename: 'js/client.js',
        path: path.resolve(__dirname, BUILD_FOLDER, 'public')
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader'
            },
            exclude: /node_modules/
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            }
          }
        ]
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: './web/index.html',
          filename: 'index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            BUILD_TARGET: JSON.stringify('client')
          }
        })
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets: presets || [] })
  );
};
