module.exports = {
  context: __dirname + '/src',
  entry: './js/app.js',
  output: {
    path: __dirname + '/src/',
    filename: 'app.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_module/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
