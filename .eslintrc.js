"use strict";

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: {
    node: true,
  },
  extends: ["convergence-base", "convergence-json"],
  ignorePatterns: ["!.*", "/.pnp.*", "/.yarn/", "/yarn.lock"],
  overrides: [
    {
      env: {
        mocha: true,
      },
      files: "*.test.js",
    },
  ],
  root: true,
};
