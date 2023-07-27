const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: {
    popup: './src/Popup.jsx',
    amazonpriceconverter: './src/contentScript/amazonpriceconverter.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  // Adding packages from node_module
  resolve: {
    alias: {
      cosmiconfig: path.resolve(__dirname, 'node_modules/cosmiconfig'),
      // '@tootallnate': path.resolve(__dirname, 'node_modules/@tootallnate'),
      // 'pac-proxy-agent': path.resolve(__dirname, 'node_modules/pac-proxy-agent'),
      // 'proxy-agent': path.resolve(__dirname, 'node_modules/proxy-agent'),
      // '@puppeteer': path.resolve(__dirname, 'node_modules/@puppeteer'),
      'puppeteer-core': path.resolve(__dirname, 'node_modules/puppeteer-core'),
      puppeteer: path.resolve(__dirname, 'node_modules/puppeteer')
    },
    // fallback: {
    //   // cosmiconfig: false,
    //   // '@tootallnate': false,
    //   // 'pac-proxy-agent': false,
    //   // 'proxy-agent': false,
    //   // '@puppeteer': false,
    //   // 'puppeteer-core': false,
    //   // puppeteer: false
    // }
  },
  // With this, Webpack can understand how to read React files to transform them into JS files
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }],
  },
  /*
  * HtmlWebpackPlugin add out html to build files
  * CopyPlugin copies all files in a directory to build files
  */
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup.html',
      filename: 'popup.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public' }
      ],
    }),
  ]
}