"use strict";

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "convergence-base",
    "convergence-json",
    "convergence-node",
    "convergence-yaml",
  ],
  ignorePatterns: ["!.*", "/.pnp.*", "/.yarn/", "/yarn.lock"],
  overrides: [
    {
      env: { mocha: true },
      files: ["*.test.js"],
    },
  ],
  root: true,
};
