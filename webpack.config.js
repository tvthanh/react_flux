var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist') + '/js',
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
