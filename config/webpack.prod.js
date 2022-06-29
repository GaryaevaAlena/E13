const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: "./scr/index.js",
    devServer: {
     static: {
      directory: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
   },
   devtool: 'inline-source-map',
   plugins: [
       new HtmlWebpackPlugin({
       title: 'Prodiction',
     })
   ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
}