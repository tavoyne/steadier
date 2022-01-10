// const withoutTypeChecking = {
//   "@typescript-eslint/adjacent-overload-signatures": "error",
//   "@typescript-eslint/array-type": "error",
//   "@typescript-eslint/ban-ts-comment": "error",
//   "@typescript-eslint/ban-tslint-comment": "error",
//   "@typescript-eslint/ban-types": "error",
//   "@typescript-eslint/class-literal-property-style": "error",
//   "@typescript-eslint/consistent-indexed-object-style": "error",
//   "@typescript-eslint/consistent-type-assertions": "error",
//   "@typescript-eslint/consistent-type-definitions": "error",
//   "@typescript-eslint/consistent-type-imports": "error",
//   "@typescript-eslint/explicit-function-return-type": "error",
//   "@typescript-eslint/explicit-member-accessibility": "error",
//   "@typescript-eslint/explicit-module-boundary-types": "error",
//   "@typescript-eslint/member-ordering": "error",
//   "@typescript-eslint/method-signature-style": "error",
//   "@typescript-eslint/no-confusing-non-null-assertion": "error",
//   "@typescript-eslint/no-dynamic-delete": "error",
//   "@typescript-eslint/no-empty-interface": "error",
//   "@typescript-eslint/no-explicit-any": "error",
//   "@typescript-eslint/no-extra-non-null-assertion": "error",
//   "@typescript-eslint/no-extraneous-class": "error",
//   "@typescript-eslint/no-implicit-any-catch": "error",
//   "@typescript-eslint/no-inferrable-types": "error",
//   "@typescript-eslint/no-invalid-void-type": "error",
//   "@typescript-eslint/no-misused-new": "error",
//   "@typescript-eslint/no-namespace": "error",
//   "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
//   "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
//   "@typescript-eslint/no-non-null-assertion": "error",
//   "@typescript-eslint/no-parameter-properties": "error",
//   "@typescript-eslint/no-require-imports": "error",
//   "@typescript-eslint/no-this-alias": "error",
//   "@typescript-eslint/no-type-alias": "error",
//   "@typescript-eslint/no-unnecessary-type-constraint": "error",
//   "@typescript-eslint/no-var-requires": "error",
//   "@typescript-eslint/prefer-as-const": "error",
//   "@typescript-eslint/prefer-enum-initializers": "error",
//   "@typescript-eslint/prefer-for-of": "error",
//   "@typescript-eslint/prefer-function-type": "error",
//   "@typescript-eslint/prefer-literal-enum-member": "error",
//   "@typescript-eslint/prefer-namespace-keyword": "error",
//   "@typescript-eslint/prefer-optional-chain": "error",
//   "@typescript-eslint/prefer-ts-expect-error": "error",
//   "@typescript-eslint/sort-type-union-intersection-members": "error",
//   "@typescript-eslint/triple-slash-reference": "error",
//   "@typescript-eslint/typedef": "error",
//   "@typescript-eslint/unified-signatures": "error",
// };

// const withTypeChecking = {
//   "@typescript-eslint/adjacent-overload-signatures": "error",
//   "@typescript-eslint/array-type": "error",
//   "@typescript-eslint/ban-ts-comment": "error",
//   "@typescript-eslint/ban-tslint-comment": "error",
//   "@typescript-eslint/ban-types": "error",
//   "@typescript-eslint/class-literal-property-style": "error",
//   "@typescript-eslint/consistent-indexed-object-style": "error",
//   "@typescript-eslint/consistent-type-assertions": "error",
//   "@typescript-eslint/consistent-type-definitions": "error",
//   "@typescript-eslint/consistent-type-imports": "error",
//   "@typescript-eslint/explicit-function-return-type": "error",
//   "@typescript-eslint/explicit-member-accessibility": "error",
//   "@typescript-eslint/explicit-module-boundary-types": "error",
//   "@typescript-eslint/member-ordering": "error",
//   "@typescript-eslint/method-signature-style": "error",
//   "@typescript-eslint/no-confusing-non-null-assertion": "error",
//   "@typescript-eslint/no-dynamic-delete": "error",
//   "@typescript-eslint/no-empty-interface": "error",
//   "@typescript-eslint/no-explicit-any": "error",
//   "@typescript-eslint/no-extra-non-null-assertion": "error",
//   "@typescript-eslint/no-extraneous-class": "error",
//   "@typescript-eslint/no-implicit-any-catch": "error",
//   "@typescript-eslint/no-inferrable-types": "error",
//   "@typescript-eslint/no-invalid-void-type": "error",
//   "@typescript-eslint/no-misused-new": "error",
//   "@typescript-eslint/no-namespace": "error",
//   "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
//   "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
//   "@typescript-eslint/no-non-null-assertion": "error",
//   "@typescript-eslint/no-parameter-properties": "error",
//   "@typescript-eslint/no-require-imports": "error",
//   "@typescript-eslint/no-this-alias": "error",
//   "@typescript-eslint/no-type-alias": "error",
//   "@typescript-eslint/no-unnecessary-type-constraint": "error",
//   "@typescript-eslint/no-var-requires": "error",
//   "@typescript-eslint/prefer-as-const": "error",
//   "@typescript-eslint/prefer-enum-initializers": "error",
//   "@typescript-eslint/prefer-for-of": "error",
//   "@typescript-eslint/prefer-function-type": "error",
//   "@typescript-eslint/prefer-literal-enum-member": "error",
//   "@typescript-eslint/prefer-namespace-keyword": "error",
//   "@typescript-eslint/prefer-optional-chain": "error",
//   "@typescript-eslint/prefer-ts-expect-error": "error",
//   "@typescript-eslint/sort-type-union-intersection-members": "error",
//   "@typescript-eslint/triple-slash-reference": "error",
//   "@typescript-eslint/typedef": "error",
//   "@typescript-eslint/unified-signatures": "error",
// };

// These rules can safely be turned off since they are already checked (more
// thoroughly) by the TypeScript compiler.
const unnecessary = {
  "constructor-super": "off",
  "getter-return": "off",
  "no-const-assign": "off",
  "no-dupe-args": "off",
  "no-dupe-class-members": "off",
  "no-dupe-keys": "off",
  "no-func-assign": "off",
  "no-new-symbol": "off",
  "no-obj-calls": "off",
  "no-redeclare": "off",
  "no-this-before-super": "off",
  "no-undef": "off",
  "no-unreachable": "off",
  "no-unsafe-negation": "off",
  "node/no-missing-import": "off",
  "valid-typeof": "off",
};

export default {
  overrides: [
    {
      files: ["*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: { sourceType: "module" },
      rules: {
        ...unnecessary,
      },
    },
  ],
};
