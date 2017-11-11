const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/widgets.jsx',
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
    ]
  },

  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },

  plugins: [
    new ExtractTextPlugin('./dist/main.css', {
      allChunks: true
    })
  ]
};
