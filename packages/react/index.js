"use strict";

const accessibility = require("./accessibility");
const hooks = require("./hooks");
const react = require("./react");

module.exports = {
  rules: {
    ...accessibility,
    ...hooks,
    ...react,
  },
};
