import path from 'path';
import webpack from 'webpack';

const production = process.env.NODE_ENV === 'production';
let plugins = [];

if (production) {
  plugins = plugins.concat[
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ];
}

export default {
  entry: { client: './app/client.js' },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'client.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: plugins
}
