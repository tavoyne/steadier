"use strict";

const assert = require("assert");
const plugin = require("eslint-plugin-yml");
const { pick } = require("lodash");

const allRules = plugin.rules;
const conflictingRules = plugin.configs.base.overrides[0].rules;
const forbiddenRules = plugin.configs.prettier.rules;

const providedRules = require("./index.cjs").overrides[0].rules;

const allRulesKeys = Object.keys(allRules)
  .map((name) => {
    return `yml/${name}`;
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

describe("YAML:", () => {
  it("All rules are present.", () => {
    assert.deepEqual(
      pick(providedRules, Object.keys(conflictingRules)),
      conflictingRules
    );
    assert.deepEqual(allRulesKeys, providedRulesKeys);
  });
});
