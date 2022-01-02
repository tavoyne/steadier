"use strict";

const accessibility = require("./accessibility.cjs");
const hooks = require("./hooks.cjs");
const react = require("./react.cjs");

module.exports = {
  rules: {
    ...accessibility,
    ...hooks,
    ...react,
  },
};
