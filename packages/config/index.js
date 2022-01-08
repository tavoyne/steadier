"use strict";

const path = require("path");

// eslint-disable-next-line node/no-unpublished-require
require("@babel/register")({
  extensions: [".ts"],
  plugins: ["babel-plugin-add-module-exports"],
  root: path.join(__dirname, "..", ".."),
});

// eslint-disable-next-line node/no-unpublished-require
module.exports = require("./src/index.ts");
