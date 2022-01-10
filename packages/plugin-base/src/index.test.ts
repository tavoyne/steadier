import { Linter } from "eslint";
import { rules as forbiddenRules } from "eslint-config-prettier";

import allConfig from "./configs/all";

const allRules = new Linter().getRules();
const providedRules = allConfig.rules;

const allRulesKeys = Array.from(allRules.entries())
  .filter(([name, rule]) => {
    return (
      !rule?.meta?.deprecated &&
      !["number", "string"].includes(typeof forbiddenRules[name])
    );
  })
  .map((entry) => {
    return entry[0];
  })
  .sort();

const providedRulesKeys = Object.keys(providedRules).sort();

describe("plugin-base", () => {
  test("All rules are present.", () => {
    expect(allRulesKeys).toEqual(providedRulesKeys);
  });
});
