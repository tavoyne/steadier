const suggestion = {
  "node/callback-return": "error",
  "node/exports-style": "error",
  "node/file-extension-in-import": "off",
  "node/global-require": "error",
  "node/handle-callback-err": "error",
  "node/no-mixed-requires": "error",
  "node/no-new-require": "error",
  "node/no-path-concat": "error",
  "node/no-process-env": "error",
  "node/no-process-exit": "error",
  "node/no-restricted-import": "error",
  "node/no-restricted-require": "error",
  "node/no-sync": "error",
  "node/prefer-global/buffer": "error",
  "node/prefer-global/console": "error",
  "node/prefer-global/process": "error",
  "node/prefer-global/text-decoder": "error",
  "node/prefer-global/text-encoder": "error",
  "node/prefer-global/url": "error",
  "node/prefer-global/url-search-params": "error",
  "node/prefer-promises/dns": "error",
  "node/prefer-promises/fs": "error",
};

const problem = {
  "node/no-callback-literal": "error",
  "node/no-deprecated-api": "error",
  "node/no-exports-assign": "error",
  "node/no-extraneous-import": "error",
  "node/no-extraneous-require": "error",
  "node/no-missing-import": "error",
  "node/no-missing-require": "error",
  "node/no-unpublished-bin": "error",
  "node/no-unpublished-import": "error",
  "node/no-unpublished-require": "error",
  "node/no-unsupported-features/es-builtins": "error",
  "node/no-unsupported-features/es-syntax": "error",
  "node/no-unsupported-features/node-builtins": "error",
  "node/process-exit-as-throw": "error",
  "node/shebang": "error",
};

export default {
  env: { node: true },
  overrides: [
    {
      files: ["**/{src,source,sources}/**/*.{js,jsx,ts,tsx}"],
      rules: {
        "node/no-unpublished-import": "off",
        "node/no-unsupported-features/es-syntax": "off",
      },
    },
  ],
  plugins: ["node"],
  rules: {
    ...problem,
    ...suggestion,
  },
};
