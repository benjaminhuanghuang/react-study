const path = require("path");
module.exports = {
  // entry: "./src/jsx-demo-index.jsx",
  // entry: "./src/react-diy-ele-index.jsx",
  entry: "./src/react-diy-render-index.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 3721,
  },
};
