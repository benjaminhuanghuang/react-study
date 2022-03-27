const path = require("path");
// create html based on a template and and import bundle.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode:"development",
  entry: {
    app: "./index.jsx",
  },
  devtool:"source-map",  // debugging
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,   /* Important! */
    port: 3721
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "assets/index.html",
      favicon: "assets/favicon.ico",
    }),
  ],
};

module.exports = config;