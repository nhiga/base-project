const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const modeConfig = mode => require(`./utils/build/webpack.server.${mode}.config`)(mode);
const presetConfig = require('./utils/build/loadPresets');

const { BUILD_FOLDER } = require('./utils/server.config');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  console.log(`[webpack.server.config] Executing in ${mode} mode with ${presets || 'no'} presets`); // eslint-disable-line no-console

  return webpackMerge(
    {
      mode,
      target: 'node',
      entry: ['./server/server'],
      output: {
        path: path.join(__dirname, BUILD_FOLDER),
        filename: 'server.js'
      },
      module: {
        rules: [
          {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'awesome-typescript-loader']
          },
          {
            enforce: 'pre',
            test: /\.js$/,
            use: 'source-map-loader'
          },
          {
            test: /\.js?$/,
            use: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.scss$/,
            use: ['css-loader', 'postcss-loader', 'sass-loader']
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: {
              loader: 'file-loader',
              options: {
                emitFile: false
              }
            },
            include: [path.resolve(__dirname, 'web/fonts')]
          }
        ]
      },
      plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            BUILD_TARGET: JSON.stringify('server'),
            NODE_ENV: JSON.stringify(mode)
          }
        })
      ],
      resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
          components: path.resolve(__dirname, 'web/components/'),
          images: path.resolve(__dirname, 'web/images/'),
          styles: path.resolve(__dirname, 'web/styles/'),
          utils: path.resolve(__dirname, 'utils/')
        }
      }
    },
    modeConfig(mode),
    presetConfig({ mode, presets: presets || [] })
  );
};
