const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const { BUILD_FOLDER, PUBLIC_FOLDER, JS_FOLDER, IMAGES_FOLDER } = require('./utils/server.config');

const modeConfig = mode => require(`./utils/build/webpack.client.${mode}.config`)(mode);
const presetConfig = require('./utils/build/loadPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  console.log(`[webpack.client.config] Executing in ${mode} mode with ${presets || 'no'} presets`); // eslint-disable-line no-console

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
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            },
            include: [path.resolve(__dirname, 'fonts')]
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
          favicon: `./${IMAGES_FOLDER}/favicon.ico`
        }),
        new webpack.NoEmitOnErrorsPlugin()
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets: presets || [] })
  );
};
