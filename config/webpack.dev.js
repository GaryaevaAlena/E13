const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

module.exports = {
    mode: 'development',
    entry: "./scr/index.js",
    devServer: {
    open: true,
     static: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 3001,
      hot: true,
      stats:{
        children: false,
        maxModules: 0
      }
    },
   },
   devtool: 'inline-source-map',
   plugins: [
       new HtmlWebpackPlugin({
       title: 'Development',
     }),
        new webpack.HotModuleReplacementPlugin(),
   ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
}