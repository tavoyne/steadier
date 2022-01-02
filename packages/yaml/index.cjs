"use strict";

const layout = {
  "yml/block-mapping": "error",
  "yml/block-sequence": "error",
  "yml/plain-scalar": "error",
};

const problem = {
  "yml/no-irregular-whitespace": "error",
  "yml/no-tab-indent": "error",
  "yml/vue-custom-block/no-parsing-error": "error",
};

const suggestion = {
  "yml/key-name-casing": "off",
  "yml/no-empty-document": "error",
  "yml/no-empty-key": "error",
  "yml/no-empty-mapping-value": "error",
  "yml/no-empty-sequence-entry": "error",
  "yml/require-string-key": "error",
  "yml/sort-keys": "error",
  "yml/spaced-comment": "error",
};

module.exports = {
  overrides: [
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
      rules: {
        ...layout,
        ...problem,
        ...suggestion,
        // ESLint core rules known to cause problems with YAML.
        "no-irregular-whitespace": "off",
        "spaced-comment": "off",
      },
    },
  ],
  plugins: ["yml"],
};
