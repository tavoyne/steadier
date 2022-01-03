"use strict";

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "convergence-base",
    "convergence-json",
    "convergence-node",
    "convergence-yaml",
  ],
  ignorePatterns: ["!.*", "/.pnp.cjs", "/.yarn/"],
  overrides: [
    {
      env: { mocha: true },
      files: ["*.test.cjs"],
    },
  ],
  root: true,
};
