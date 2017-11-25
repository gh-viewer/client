const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['babel-regenerator-runtime', './index.web.js'],
  output: {
    path: path.resolve(__dirname, 'desktop', 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /react-native-web/,
      },
      {
        test: /\.(png|ttf)$/,
        loader: 'file-loader',
      },
    ],
  },
  target: 'electron-renderer',
  devtool: 'source-map',
  resolve: {
    alias: {
      'react-native': 'react-native-electron',
      'react-navigation': 'react-navigation/lib-rn/react-navigation.js',
    },
    extensions: ['.web.js', '.js', '.json'],
  },
  node: {
    __filename: true,
    __dirname: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true)
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'desktop'),
    overlay: true,
    port: 8082,
  },
}
