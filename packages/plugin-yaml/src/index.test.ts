import ymlPlugin from "eslint-plugin-yml";
import { pick } from "lodash";

import allConfig from "./configs/all";

const allRules = ymlPlugin.rules;
const rulesConflicWithBase = ymlPlugin.configs.base.overrides[0].rules;
const rulesConflicWithPrettier = ymlPlugin.configs.prettier.rules;

const providedRules = allConfig.overrides[0].rules;

const allRulesKeys = Object.keys(allRules)
  .map((name) => {
    return `yml/${name}`;
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

describe("plugin-yaml", () => {
  test("All rules are present.", () => {
    expect(pick(providedRules, Object.keys(rulesConflicWithBase))).toEqual(
      rulesConflicWithBase
    );
    expect(allRulesKeys).toEqual(providedRulesKeys);
  });
});
