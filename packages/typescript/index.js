"use strict";

const allTypescriptRules = require("@typescript-eslint/eslint-plugin").rules;
const prettierExcludedRules = require("eslint-config-prettier").rules;

const baseRules = require("./base");

const noTypeChecking = {
  "@typescript-eslint/adjacent-overload-signatures": "error",
  "@typescript-eslint/array-type": "error",
  "@typescript-eslint/ban-ts-comment": "error",
  "@typescript-eslint/ban-tslint-comment": "error",
  "@typescript-eslint/ban-types": "error",
  "@typescript-eslint/class-literal-property-style": "error",
  "@typescript-eslint/consistent-indexed-object-style": "error",
  "@typescript-eslint/consistent-type-assertions": "error",
  "@typescript-eslint/consistent-type-definitions": "error",
  "@typescript-eslint/consistent-type-imports": "error",
  "@typescript-eslint/explicit-function-return-type": "error",
  "@typescript-eslint/explicit-member-accessibility": "error",
  "@typescript-eslint/explicit-module-boundary-types": "error",
  "@typescript-eslint/member-ordering": "error",
  "@typescript-eslint/method-signature-style": "error",
  "@typescript-eslint/no-confusing-non-null-assertion": "error",
  "@typescript-eslint/no-dynamic-delete": "error",
  "@typescript-eslint/no-empty-interface": "error",
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-extra-non-null-assertion": "error",
  "@typescript-eslint/no-extraneous-class": "error",
  "@typescript-eslint/no-implicit-any-catch": "error",
  "@typescript-eslint/no-inferrable-types": "error",
  "@typescript-eslint/no-invalid-void-type": "error",
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-namespace": "error",
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
  "@typescript-eslint/no-non-null-assertion": "error",
  "@typescript-eslint/no-parameter-properties": "error",
  "@typescript-eslint/no-require-imports": "error",
  "@typescript-eslint/no-this-alias": "error",
  "@typescript-eslint/no-type-alias": "error",
  "@typescript-eslint/no-unnecessary-type-constraint": "error",
  "@typescript-eslint/no-var-requires": "error",
  "@typescript-eslint/prefer-as-const": "error",
  "@typescript-eslint/prefer-enum-initializers": "error",
  "@typescript-eslint/prefer-for-of": "error",
  "@typescript-eslint/prefer-function-type": "error",
  "@typescript-eslint/prefer-literal-enum-member": "error",
  "@typescript-eslint/prefer-namespace-keyword": "error",
  "@typescript-eslint/prefer-optional-chain": "error",
  "@typescript-eslint/prefer-ts-expect-error": "error",
  "@typescript-eslint/sort-type-union-intersection-members": "error",
  "@typescript-eslint/triple-slash-reference": "error",
  "@typescript-eslint/typedef": "error",
  "@typescript-eslint/unified-signatures": "error",
};

const requiresTypeChecking = {
  "@typescript-eslint/await-thenable": "error",
  "@typescript-eslint/consistent-type-exports": "off",
  "@typescript-eslint/naming-convention": [
    "error",
    { format: ["PascalCase"], selector: "typeLike" },
  ],
  "@typescript-eslint/no-base-to-string": "off",
  "@typescript-eslint/no-confusing-void-expression": "off",
  "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/no-for-in-array": "error",
  "@typescript-eslint/no-meaningless-void-operator": "off",
  "@typescript-eslint/no-misused-promises": "error",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
  "@typescript-eslint/no-unnecessary-condition": "off",
  "@typescript-eslint/no-unnecessary-qualifier": "off",
  "@typescript-eslint/no-unnecessary-type-arguments": "off",
  "@typescript-eslint/no-unnecessary-type-assertion": "error",
  "@typescript-eslint/no-unsafe-argument": "error",
  "@typescript-eslint/no-unsafe-assignment": "error",
  "@typescript-eslint/no-unsafe-call": "error",
  "@typescript-eslint/no-unsafe-member-access": "error",
  "@typescript-eslint/no-unsafe-return": "error",
  "@typescript-eslint/non-nullable-type-assertion-style": "off",
  "@typescript-eslint/prefer-includes": "off",
  "@typescript-eslint/prefer-nullish-coalescing": "off",
  "@typescript-eslint/prefer-readonly": "off",
  "@typescript-eslint/prefer-readonly-parameter-types": "off",
  "@typescript-eslint/prefer-reduce-type-parameter": "off",
  "@typescript-eslint/prefer-regexp-exec": "off",
  "@typescript-eslint/prefer-return-this-type": "off",
  "@typescript-eslint/prefer-string-starts-ends-with": "off",
  "@typescript-eslint/promise-function-async": "off",
  "@typescript-eslint/require-array-sort-compare": "off",
  "@typescript-eslint/restrict-plus-operands": "error",
  "@typescript-eslint/restrict-template-expressions": "error",
  "@typescript-eslint/strict-boolean-expressions": "off",
  "@typescript-eslint/switch-exhaustiveness-check": "off",
  "@typescript-eslint/unbound-method": "error",
};

const rules = {
  ...noTypeChecking,
  ...requiresTypeChecking,
};

Object.entries(allTypescriptRules)
  .filter(([name, rule]) => {
    return (
      rule.meta.docs.extendsBaseRule &&
      !["number", "string"].includes(
        typeof prettierExcludedRules[`@typescript-eslint/${name}`]
      )
    );
  })
  .forEach(([name, rule]) => {
    const { extendsBaseRule } = rule.meta.docs;
    const baseName =
      typeof extendsBaseRule === "string" ? extendsBaseRule : name;

    if (baseRules[baseName]) {
      rules[baseName] = "off";
      rules[`@typescript-eslint/${name}`] = baseRules[baseName];
    }
  });

module.exports = rules;
