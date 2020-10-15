const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function isDev(argv) {
  return argv.mode === 'development';
}

module.exports = (env, argv) => {
  return {
    entry: ['react-hot-loader/patch', './src/index.js'],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: /src/,
        },
        {
          test: /\.(js|jsx)$/,
          use: 'react-hot-loader/webpack',
          include: /node_modules/,
        },
        {
          test: /\.(scss|css)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif|ico)$/,
          use: ['file-loader'],
        },
        {
          test: /\.pdf$/,
          use: 'file-loader?name=[path][name].[ext]',
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js?[fullhash]',
      chunkFilename: 'js/[name].js?[fullhash]',
    },
    plugins: [
      ...[
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html',
        }),
      ],
      ...(isDev(argv)
        ? [
            // dev only plugins
            new BundleAnalyzerPlugin(),
            new AssetsPlugin({
              filename: 'assets.json',
              prettyPrint: true,
              // keepInMemory: true,
              removeFullPathAutoPrefix: true,
            }),
          ]
        : [
            // prod only plugins
            new AssetsPlugin({
              filename: 'assets.json',
              prettyPrint: true,
              fullPath: true,
              keepInMemory: false,
              removeFullPathAutoPrefix: true,
            }),
          ]),
    ],
    devServer: {
      compress: true,
      contentBase: './dist',
      hot: true,
      open: true,
      port: 9999,
    },
  };
};
