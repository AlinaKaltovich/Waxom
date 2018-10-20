const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports={
    entry: './app.js',
    output: {
        filename: 'bundle.js',
    },
    performance: {
      hints: false
    },
    devServer:{
        index: 'index.html',
    },
    watch: true,
  module: {
    rules: [{
      test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader",
        options: {
          includePaths: []
        }
      }]
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"]
    }]
  },
  plugins: [
    new LiveReloadPlugin({}),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, "node_modules")
    ]),
  ]
}