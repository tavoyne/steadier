"use strict";

// eslint-disable-next-line node/no-unpublished-require
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["@steadier"],
  ignorePatterns: ["!.*", "/.pnp.cjs", "/.yarn/**/*", "/packages/*/lib/**/*"],
  overrides: [
    {
      env: { jest: true },
      files: ["*.test.{js,jsx,ts,tsx}"],
    },
  ],
  root: true,
};
