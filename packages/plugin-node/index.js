/* eslint-disable node/no-unpublished-require */

"use strict";

require("@babel/register")({
  extensions: [".ts"],
  root: __dirname,
});

module.exports = require("./src/index.ts").default;
