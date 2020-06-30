const HtmlWebpackPlugin = require('html-webpack-plugin'), // Require  html-webpack-plugin plugin
  path = require('path');
  fs = require('fs');

module.exports = {
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  entry: path.join(__dirname, 'src/app/main.js'), // webpack entry point. Module to start building dependency graph
  output: {
    path: path.join(__dirname, 'dist'), // Folder to store generated bundle
    filename: 'bundle.js', // Name of generated bundle after build
    publicPath: '/', // public URL of the output directory when referenced in a browser
  },
  module: {
    // where we defined file patterns and their loaders
    rules: [],
  },
  plugins: [
    // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/public/index.html'),
      inject: 'body',
    }),
  ],
  devServer: {
    // configuration for webpack-dev-server
    contentBase: './src/public', //source of static assets
    port: 443, // port to run dev-server
    host: '192.168.0.106'
  },
};
