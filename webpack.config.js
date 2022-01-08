"use strict";

const path = require("path");

module.exports = {
  // eslint-disable-next-line node/no-process-env
  entry: path.join(process.env.INIT_CWD, "src", "index.ts"),
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
    // eslint-disable-next-line node/no-process-env
    path: path.join(process.env.INIT_CWD, "lib"),
  },
  resolve: {
    extensions: [".ts"],
  },
};
