const path = require('path')

module.exports = {
  entry: ['babel-regenerator-runtime', './index.web.js'],
  output: {
    path: path.join(__dirname, 'desktop', 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!react-native-(elements|side-menu|tab-navigator|tab-view|vector-icons)|react-navigation\/).*/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|ttf)$/,
        loader: 'file-loader',
      },
    ],
  },
  target: 'electron-renderer',
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
  devServer: {
    contentBase: path.join(__dirname, 'desktop'),
    overlay: true,
    port: 8082,
  },
}
