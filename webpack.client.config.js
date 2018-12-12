const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const { BUILD_FOLDER, PUBLIC_FOLDER, JS_FOLDER } = require('./utils/server.config');

const modeConfig = mode => require(`./utils/build/webpack.client.${mode}.config`)(mode);
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
        filename: `${JS_FOLDER}/client.js`,
        path: path.join(__dirname, BUILD_FOLDER, PUBLIC_FOLDER)
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
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]'
                }
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 60
                  }
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            BUILD_TARGET: JSON.stringify('client')
          }
        }),
        new HtmlWebPackPlugin({
          template: './web/index.html',
          alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets: presets || [] })
  );
};
