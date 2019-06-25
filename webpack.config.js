const path = require('path');

module.exports = {
  node: false,
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: "./bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          "presets": [
            "@babel/preset-env",
            "@babel/preset-react",
          ],
          "plugins": [
            "@babel/plugin-proposal-class-properties"
          ]
        },
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: 'css-loader',
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