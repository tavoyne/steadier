import jsoncPlugin from "eslint-plugin-jsonc";
import { pick } from "lodash";

import allConfig from "./configs/all";

const allRules = jsoncPlugin.rules;
const rulesConflicWithBase = jsoncPlugin.configs.base.overrides[0].rules;
const rulesConflicWithPrettier = jsoncPlugin.configs.prettier.rules;

const providedRules = allConfig.overrides[0].rules;

const allRulesKeys = Object.keys(allRules)
  .map((name) => {
    return `jsonc/${name}`;
  })
  .filter((name) => {
    return !Object.prototype.hasOwnProperty.call(
      rulesConflicWithPrettier,
      name
    );
  })
  .sort();

const providedRulesKeys = Object.keys(providedRules)
  .filter((name) => {
    return !Object.prototype.hasOwnProperty.call(rulesConflicWithBase, name);
  })
  .sort();

describe("plugin-json", () => {
  test("All rules are present.", () => {
    expect(pick(providedRules, Object.keys(rulesConflicWithBase))).toEqual(
      rulesConflicWithBase
    );
    expect(allRulesKeys).toEqual(providedRulesKeys);
  });
});
