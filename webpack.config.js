const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            }
          }
        ],
      }
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
}