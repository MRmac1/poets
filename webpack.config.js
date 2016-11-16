/*
webpack 开发环境下编译
webpack -p 产品编译及压缩
webpack --watch 开发环境下持续的监听文件变动来进行编译(非常快!)
webpack -d 引入 source maps
*/
const webpack = require('webpack');
const path = require('path');
var htmlPlugin = require('html-webpack-plugin');

let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, 'public', 'javascripts');
let BUILD_PATH = path.resolve(ROOT_PATH, 'public', 'build');

module.exports = {
  entry: {
    app: path.resolve( APP_PATH, 'app.js')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    perLoaders: [
        {
            test: /\.js?$/,
            include: APP_PATH,
            loader: 'jshint-loader'
        }
    ],
    loaders: [
      {
        test: /.\js$/,
        include: APP_PATH,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader!limit=8192'
      }
    ]
  },
  jshint: {
    "esnext": true
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.scss']
  },
  plugins: [ new htmlPlugin() ]
};
