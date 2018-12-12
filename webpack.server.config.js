const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const modeConfig = mode => require(`./utils/build/webpack.server.${mode}.config`)(mode);
const presetConfig = require('./utils/build/loadPresets');

const { BUILD_FOLDER } = require('./utils/server.config');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  // TODO: Replace console log with Logger component
  console.log(`Server is building in ${mode} mode`); // eslint-disable-line no-console
  console.log(`Server is processing ${presets || 'no'} presets`); // eslint-disable-line no-console
  return webpackMerge(
    {
      mode,
      target: 'node',
      entry: ['./server/index'],
      output: {
        path: path.resolve(__dirname, BUILD_FOLDER),
        filename: 'server.js'
      },
      module: {
        rules: [
          {
            test: /\.js?$/,
            use: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.scss$/,
            use: ['css-loader', 'sass-loader']
          }
        ]
      },
      plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            BUILD_TARGET: JSON.stringify('server')
          }
        })
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets: presets || [] })
  );
};
