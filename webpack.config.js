"use strict";

const path = require("path");

const manifest = require(path.join(
  // eslint-disable-next-line node/no-process-env
  process.env.INIT_CWD,
  "package.json"
));

const externals = {
  ...manifest.dependencies,
  ...manifest.peerDependencies,
};

Object.keys(externals).forEach((key) => {
  externals[key] = key;
});

module.exports = {
  // eslint-disable-next-line node/no-process-env
  entry: path.join(process.env.INIT_CWD, "src", "index.ts"),
  externals,
  externalsPresets: { node: true },
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
