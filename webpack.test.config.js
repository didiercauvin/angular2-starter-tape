var path = require('path');

module.exports = {
  devtool: 'inline-source-map',

  entry: {},

  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['./src', 'node_modules']
  },

  module: {
    rules: [
        {
            test: /\.ts$/,
            loaders: [
            'awesome-typescript-loader',
            'angular2-template-loader'
            ]
        },
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
    ]
  },

  node: {
    fs: "empty"
  }
}