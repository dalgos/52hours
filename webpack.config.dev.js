const path = require('path')
const config = require('./webpack.config')

console.log(process.env.NODE_ENV)

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  devServer: {
    contentBase: [
      './src', './public'
    ],
    // compress: true,
    port: 8080,
    // watchContentBase: true,
    // historyApiFallback: true,
    hot: true,
    // proxy: {
    //   '/api/*': {
    //     target: 'http://mediaadmin.qa.tmon.co.kr',
    //     changeOrigin: true,
    //   },
    //   '/_socket/*': {
    //     target: 'http://mediaadmin.qa.tmon.co.kr',
    //     changeOrigin: true,
    //     ws: true,
    //   },
    // }
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.scss', '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    }
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          }
        }
      }
    ]
  },
  devtool: 'eval-source-map'
}