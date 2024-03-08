const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PugPlugin = require('pug-plugin');

module.exports = {
  mode: 'development',
  entry: {
    script: './src/js/index.js',
    pug: './src/view/index.pug'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        include:  path.resolve(__dirname, 'src', 'view'),
        use: PugPlugin.loader,
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src', 'styles'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [
    new PugPlugin({
      template: './src/view/index.pug',
      filename: 'index.html',
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 9000,
    open: true,
  },
};
