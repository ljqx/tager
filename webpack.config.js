/* eslint-env node */
module.exports = {
  entry: {
    index: './src/index'
  },
  output: {
    libraryTarget: 'commonjs'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
};
