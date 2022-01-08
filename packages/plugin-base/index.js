/* eslint-disable node/no-unpublished-require */

"use strict";

const path = require("path");

require("@babel/register")({
  extensions: [".ts"],
  root: path.join(__dirname, "..", ".."),
});

module.exports = require("./src/index.ts").default;
