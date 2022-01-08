"use strict";

// eslint-disable-next-line node/no-unpublished-require
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["@steadier"],
  ignorePatterns: ["!.*", "/packages/*/lib/", "/.pnp.cjs", "/.yarn/"],
  overrides: [
    {
      env: { jest: true },
      files: ["*.test.js"],
    },
    {
      files: ["packages/*/src/**/*"],
      parserOptions: { sourceType: "module" },
      rules: {
        "node/no-unsupported-features/es-syntax": "off",
      },
    },
  ],
  root: true,
};
