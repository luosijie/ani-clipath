const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/docs',
    filename: '[name]?[hash].js'
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
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  devtool: 'eval-source-map',
}

if (process.env.NODE_ENV === 'development') {
  module.exports.module.rules = module.exports.module.rules.concat([
    {
      test: /\.scss$/,
      use: [ 'style-loader' ,'css-loader', 'sass-loader', 'postcss-loader' ]
    }
  ])
}

if (process.env.NODE_ENV === 'production') {
  module.exports.module.rules = module.exports.module.rules.concat([
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use:[ 'css-loader', 'sass-loader', 'postcss-loader' ]
      })
    }
  ])
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    }),
    new ExtractTextPlugin('style.css')
  ])
}
