"use strict";

const path = require("path");

module.exports = {
  entry: path.resolve("src/index.ts"),
  mode: "production",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.ts?$/u,
      },
    ],
  },
  output: {
    filename: "index.js",
    library: {
      export: "default",
      type: "commonjs",
    },
    path: path.resolve("lib"),
  },
  resolve: {
    extensions: [".ts"],
  },
};
