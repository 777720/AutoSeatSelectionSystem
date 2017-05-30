const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/app.js'

  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  context: resolve(__dirname),
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: [
          /antd/,
          /react-md-editor/,
          /codemirror/,
        ],
        use: [
          'style-loader',
          'css-loader?modules',

        ],
      },
      {
        test: /\.css$/,
        include: [
          /antd/,
          /react-md-editor/,
          /codemirror/,
        ],
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|eot|svg|ttf|woff|woff2|gif)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new HtmlWebpackPlugin({template: 'dist/index.html'}),
  ],
};
