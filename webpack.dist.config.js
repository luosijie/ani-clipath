const webpack = require('webpack');

module.exports = {
  entry: './src/js/ani-clipath.js',
  output: {
    path: __dirname + '/dist',
    filename: 'ani-clipath.min.js',
    library: 'ani-clipath',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    }),
  ]
}
