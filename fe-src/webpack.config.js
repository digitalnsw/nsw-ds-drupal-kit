const path = require('path');

module.exports = {
  entry: [
    './js/main.js',
    './sass/main.scss'
  ],
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, '../web/themes/custom/nsw-design-system'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'css/', name: 'custom.css'}
          },
          'sass-loader'
        ]
      },
    ],
  },
};
