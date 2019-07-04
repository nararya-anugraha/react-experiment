var path = require("path");

module.exports = {
  entry: "./src/index.js",
  target: "node",
  output: {
    path: path.resolve("build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  }
};
