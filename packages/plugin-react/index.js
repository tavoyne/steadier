"use strict";

const accessibility = require("./accessibility");
const hooks = require("./hooks");
const react = require("./react");
const rules = require("./rules");

module.exports = {
  configs: {
    all: {
      rules: {
        ...accessibility,
        ...hooks,
        ...react,
      },
    },
  },
  rules,
};
