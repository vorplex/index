const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const __DEV__ = process.env.NODE_ENV === 'development';

module.exports = {
  mode: __DEV__ ? 'development' : 'production',
  devtool: __DEV__ ? 'cheap-module-eval-source-map' : 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs']
  },
  output: {
    filename: __DEV__ ? 'main.js' : '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              hmr: __DEV__
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      __DEV__
    }),
    new MiniCssExtractPlugin({
      filename: __DEV__ ? '[name].css' : '[name].[hash].css',
      chunkFilename: __DEV__ ? '[id].css' : '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new ForkTsCheckerWebpackPlugin({
      async: false,
      silent: true
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // Must be set to true if using source-maps in production
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  devServer: {
    hot: true,
    compress: true
  }
};
