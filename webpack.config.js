module.exports = {
  context: __dirname + '/src',
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
  }
};
