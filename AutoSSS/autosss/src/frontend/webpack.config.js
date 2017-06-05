const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8083',
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name]-[id].js',
  },
  context: resolve(__dirname),
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    // enable HMR on the server
    contentBase: resolve(__dirname, 'dist'),
    // match the output path
    publicPath: '/',
    // match the output `publicPath`s
    port:8083,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        secure: false,
        prependPath: false
      }
    },
  },
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
