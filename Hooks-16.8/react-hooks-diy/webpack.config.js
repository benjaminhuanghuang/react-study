const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  // entry: "./src/index-class.jsx",
  // entry: "./src/index-function.jsx",
  devtool: 'eval-source-map',   // enable the debugger !
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env","@babel/preset-react"],
            plugins: ['@babel/plugin-proposal-class-properties']
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3721,
  },
};
