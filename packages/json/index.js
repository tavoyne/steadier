"use strict";

const layout = {
  "array-bracket-newline": "error",
  "array-bracket-spacing": "error",
  "array-element-newline": "error",
  "comma-dangle": "error",
  "comma-style": "error",
  indent: "error",
  "key-spacing": "error",
  "object-curly-newline": "error",
  "object-curly-spacing": "error",
  "object-property-newline": "error",
  quotes: "error",
  "space-unary-ops": "error",
};

const problems = {
  "no-bigint-literals": "error",
  "no-binary-expression": "error",
  "no-binary-numeric-literals": "error",
  "no-comments": "error",
  "no-dupe-keys": "error",
  "no-escape-sequence-in-identifier": "error",
  "no-hexadecimal-numeric-literals": "error",
  "no-infinity": "error",
  "no-nan": "error",
  "no-number-props": "error",
  "no-numeric-separators": "error",
  "no-octal-numeric-literals": "error",
  "no-parenthesized": "error",
  "no-plus-sign": "error",
  "no-regexp-literals": "error",
  "no-sparse-arrays": "error",
  "no-template-literals": "error",
  "no-undefined-value": "error",
  "no-unicode-codepoint-escapes": "error",
  "valid-json-number": "error",
  "vue-custom-block/no-parsing-error": "error",
};

const suggestion = {
  auto: "error",
  "key-name-casing": "error",
  "no-floating-decimal": "error",
  "no-multi-str": "error",
  "no-octal": "error",
  "no-octal-escape": "error",
  "no-useless-escape": "error",
  "quote-props": "error",
  "sort-keys": "error",
};

module.exports = {
  plugins: ["jsonc"],
  rules: {
    ...layout,
    ...problems,
    ...suggestion,
  },
};
