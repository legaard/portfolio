const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const isProd = process.argv[2] === '-p';
const styleProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'postcss-loader' ,'sass-loader']
});
const styleDev = ['style-loader', 'css-loader', 'postcss-loader' ,'sass-loader'];
const style = isProd ? styleProd : styleDev;

module.exports = {
  entry: path.join(__dirname, 'src/js/app.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.min.[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_module/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        use: style
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    open: true,
    port: 8088,
    host: '0.0.0.0',
    hot: true,
    stats: "errors-only"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProd ? 'production' : 'development')
      }
    }),
    new HtmlWebpackPlugin({
      filename: path.join('index.html'),
      template: path.join(__dirname, 'src/index.html')
    }),
    new ExtractTextPlugin({
      filename: 'styles.min.[hash:8].css',
      disable: !isProd
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
