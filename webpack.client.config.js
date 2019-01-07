const CopyWebpackPlugin = require('copy-webpack-plugin');
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
      entry: ['./web/client.tsx'],
      output: {
        filename: `${JS_FOLDER}/client.js`,
        path: path.join(__dirname, BUILD_FOLDER, PUBLIC_FOLDER)
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
            loader: 'source-map-loader'
          },
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
                  name: 'images/[name].[ext]',
                  publicPath: '/'
                }
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: false,
                  mozjpeg: {
                    progressive: true,
                    quality: 100
                  },
                  webp: {
                    quality: 100
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
                name: 'fonts/[name].[ext]',
                publicPath: '/'
              }
            },
            include: [path.resolve(__dirname, 'web/fonts')]
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
          favicon: `./web/${IMAGES_FOLDER}/favicon.ico`
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([{ from: 'web/images', to: 'images' }])
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
