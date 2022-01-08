import plugin from "eslint-plugin-jsonc";
// @ts-ignore
import { pick } from "lodash";

import all from "./configs/all";

const allRules = plugin.rules;
const conflictingRules = plugin.configs.base.overrides[0].rules;
const forbiddenRules = plugin.configs.prettier.rules;

const providedRules = all.overrides[0].rules;

const allRulesKeys = Object.keys(allRules)
  .map((name) => {
    return `jsonc/${name}`;
  })
  .filter((name) => {
    // @ts-ignore
    return !forbiddenRules[name];
  })
  .sort();

const providedRulesKeys = Object.keys(providedRules)
  .filter((name) => {
    // @ts-ignore
    return !conflictingRules[name];
  })
  .sort();

test("All rules are present.", () => {
  expect(pick(providedRules, Object.keys(conflictingRules))).toEqual(
    conflictingRules
  );
  expect(allRulesKeys).toEqual(providedRulesKeys);
});
