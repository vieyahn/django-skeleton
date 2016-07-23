var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
  entry: [
    './src/jsx/index.jsx' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, 'src/static/bundle'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  },
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  })
  ]
};
