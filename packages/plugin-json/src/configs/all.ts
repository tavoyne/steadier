const problem = {
  "jsonc/no-bigint-literals": "error",
  "jsonc/no-binary-expression": "error",
  "jsonc/no-binary-numeric-literals": "error",
  "jsonc/no-comments": "error",
  "jsonc/no-dupe-keys": "error",
  "jsonc/no-escape-sequence-in-identifier": "error",
  "jsonc/no-hexadecimal-numeric-literals": "error",
  "jsonc/no-infinity": "error",
  "jsonc/no-nan": "error",
  "jsonc/no-number-props": "error",
  "jsonc/no-numeric-separators": "error",
  "jsonc/no-octal-numeric-literals": "error",
  "jsonc/no-parenthesized": "error",
  "jsonc/no-plus-sign": "error",
  "jsonc/no-regexp-literals": "error",
  "jsonc/no-sparse-arrays": "error",
  "jsonc/no-template-literals": "error",
  "jsonc/no-undefined-value": "error",
  "jsonc/no-unicode-codepoint-escapes": "error",
  "jsonc/valid-json-number": "error",
  "jsonc/vue-custom-block/no-parsing-error": "error",
};

const suggestion = {
  "jsonc/auto": "error",
  "jsonc/key-name-casing": "off",
  "jsonc/no-multi-str": "error",
  "jsonc/no-octal": "error",
  "jsonc/no-octal-escape": "error",
  "jsonc/no-useless-escape": "error",
  "jsonc/sort-keys": "error",
};

export default {
  overrides: [
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
      plugins: ["jsonc"],
      rules: {
        ...problem,
        ...suggestion,
        // ESLint core rules known to cause problems with JSON.
        "no-unused-expressions": "off",
        strict: "off",
      },
    },
  ],
};
