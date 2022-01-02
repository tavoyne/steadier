"use strict";

const assert = require("assert");
const { Linter } = require("eslint");
const allRules = new Linter().getRules();
const forbiddenRules = require("eslint-config-prettier").rules;

const providedRules = require("./index.cjs").rules;

const allRulesKeys = Array.from(allRules.keys())
  .filter((name) => {
    return (
      !allRules.get(name).meta.deprecated &&
      !["number", "string"].includes(typeof forbiddenRules[name])
    );
  })
  .sort();

const providedRulesKeys = Object.keys(providedRules).sort();

describe("Base:", () => {
  it("All rules are present.", () => {
    assert.deepEqual(allRulesKeys, providedRulesKeys);
  });
});
