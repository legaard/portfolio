const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: './js/app.js',
  output: {
    path: __dirname + '/src/',
    filename: 'app.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_module/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader' ,'sass-loader']
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
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
