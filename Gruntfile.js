'use strict';

var webpackConfig = require('./webpack.config.js');

module.exports = function (grunt) {
  grunt.initConfig({
    'webpack-dev-server': {
      options: {
        hot: true,
        port: 8000,
        quiet: false,
        noInfo: false,
        lazy: false,
        stats: { colors: true },
        webpack: webpackConfig,
        publicPath: '/assets/',
        contentBase: './examples/'
      },

      start: {
        keepAlive: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('dev', ['webpack-dev-server']);
};
