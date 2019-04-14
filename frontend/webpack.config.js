const path = require('path')

const env = process.env.NODE_ENV === 'production' ? 'production' : "development"
const contentBase = path.resolve(path.join('..', 'public'))

module.exports = {
  mode: env,
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
    path: contentBase
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader'
      }
    }]
  },
  devServer: {
    contentBase,
    watchContentBase: true
  },
  devtool: "source-map",
}
