var path = require('path');

module.exports = {
  resolve: {
    root: [path.resolve('./'), path.resolve('./node_modules/vuestrap-base-components')]
  },
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve('assets/'),
    filename: "bundle.js"
  },
  themeLoader: {
    themes: ['./src/theme/app.scss', './node_modules/vuestrap/theme/bootstrap.scss'], // docs theme, default bootstrap
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader!vuestrap-theme-loader'
    }]
  }
};
