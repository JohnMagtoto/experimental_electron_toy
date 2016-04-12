// resources:
// https://webpack.github.io/docs/configuration.html
// http://jonathancreamer.com/advanced-webpack-part-1-the-commonschunk-plugin/


var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'source-map',
  debug: true,

  entry: {
    // Entry point for angular2 modules
    'angular2': [
      'rxjs',
      'reflect-metadata',
      'angular2/core',
      'angular2/router',
      'angular2/http'
    ],
    // Entry point for the application
    'app': './app/main'
  },

  // Where to place build files;
  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  // file types to find
  // An array of extensions that should be used to resolve modules. -> from site
  resolve: {
    extensions: ['','.ts','.js','.json', '.css', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: [ /node_modules/ ]
      }
    ]
  },

  // extra plugins of the application
  // CommonsChunkPlugin purpose is to group modules (chunks) of code used the most and place them into a separate file. This is to have a common file that contains css and js that is commonly used in the app.
  plugins: [
    new CommonsChunkPlugin({ name: 'angular2', filename: 'angular2.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common',   filename: 'common.js' })
  ]
};
