const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src');
const PACKAGES_DIR = path.resolve(__dirname, './node_modules');

module.exports = {
  node: false,
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: "./bundle.js"
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })],
    modules: [APP_DIR, PACKAGES_DIR],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.pcss', '.css']
  },
  stats: {
    colors: true,
    entrypoints: true,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-modules-typescript-loader"
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
                plugins: () => [
                    require('autoprefixer')
                ]
            }
          }
        ]
      }
    ]
  }
}