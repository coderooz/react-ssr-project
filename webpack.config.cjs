const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelLoder = {
  rules: [
    {
      test: /\.(js|jsx|tsx|ts)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }],
            ['@babel/preset-typescript', { runtime: 'automatic' }]
          ],
          plugins: ['@babel/plugin-transform-runtime']
        }
      }
    }
  ]
};

const resolve = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
};

const serverConfig = {
  mode: 'development',
  target: 'node',
  entry: './src/server/server.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.cjs'
  },
  module: babelLoder,
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      PORT: '3000'
    })
  ],
  resolve
};

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: './src/client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'client.js'
  },
  module: {
    rules: [
      ...babelLoder.rules,
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'output.css'
    }),
    new htmlWebpackPlugin({
      template: `${__dirname}/src/client/index.html`
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      PORT: '3000'
    })
  ],
  resolve
};

module.exports = [serverConfig, clientConfig];