"use strict";

const assert = require("assert");
const plugin = require("eslint-plugin-jsonc");
const { pick } = require("lodash");

const allRules = plugin.rules;
const conflictingRules = plugin.configs.base.overrides[0].rules;
const forbiddenRules = plugin.configs.prettier.rules;

const providedRules = require("./index").configs.all.overrides[0].rules;

const allRulesKeys = Object.keys(allRules)
  .map((name) => {
    return `jsonc/${name}`;
  })
  .filter((name) => {
    return !forbiddenRules[name];
  })
  .sort();

const providedRulesKeys = Object.keys(providedRules)
  .filter((name) => {
    return !conflictingRules[name];
  })
  .sort();

describe("JSON:", () => {
  it("All rules are present.", () => {
    assert.deepEqual(
      pick(providedRules, Object.keys(conflictingRules)),
      conflictingRules
    );
    assert.deepEqual(allRulesKeys, providedRulesKeys);
  });
});
