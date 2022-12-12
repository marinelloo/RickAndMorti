const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: ["ts-loader"],
        },
        {
          test: /\\.(png|jp(e*)g|svg|gif)$/,
          exclude: /node_modules/,
          use: ["file-loader"],
      }
    ],
},
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  stats: 'errors-only',
}