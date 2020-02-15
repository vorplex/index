const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const __DEV__ = process.env.NODE_ENV === 'development';

module.exports = {
  mode: __DEV__ ? 'development' : 'production',
  devtool: __DEV__ ? 'cheap-module-eval-source-map' : 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs']
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
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: __DEV__ ? '[name].css' : '[name].[hash].css',
      chunkFilename: __DEV__ ? '[id].css' : '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
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
    compress: true
  }
};
