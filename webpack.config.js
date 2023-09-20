// webpack.config.js
module.exports = {
  // ...other webpack configuration options
  module: {
    rules: [
      // ...other rules
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
