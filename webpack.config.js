/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {

  output: {
    path: path.join(__dirname, 'examples', 'assets'),
    filename: '[name].entry.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: 'inline-source-map',
  entry: {
    basic: ['webpack/hot/only-dev-server', './examples/basic/App.js'],
    fullwindow: ['webpack/hot/only-dev-server', './examples/fullwindow/App.js']
  },

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'src': path.join(__dirname, 'src')
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
