"use strict";

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["@steadier"],
  ignorePatterns: ["!.*", "/.pnp.cjs", "/.yarn/"],
  overrides: [
    {
      env: { mocha: true },
      files: ["*.test.js"],
    },
  ],
  root: true,
};
