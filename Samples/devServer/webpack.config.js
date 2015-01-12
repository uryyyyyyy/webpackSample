module.exports = {
  entry: './Samples/devServer/main.js',
  devtool: 'inline-source-map',
  output: {
    path: './Samples/devServer/',
    filename: 'bundle.js',
    publicPath: 'build'
  }
};
