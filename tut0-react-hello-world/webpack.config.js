var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  // devtool: 'cheap-module-eval-source-map',
  entry: {
    main: APP_DIR + '/index.jsx',
    D1: APP_DIR + '/execload.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

module.exports = config;