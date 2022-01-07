// @ts-ignore
import { Linter } from "eslint";
// @ts-ignore
import { rules as forbiddenRules } from "eslint-config-prettier";

import all from "./configs/all";

const allRules = new Linter().getRules();
const providedRules = all.rules;

const allRulesKeys = Array.from(allRules.keys())
  .filter((name) => {
    return (
      !allRules.get(name).meta.deprecated &&
      !["number", "string"].includes(typeof forbiddenRules[name])
    );
  })
  .sort();

const providedRulesKeys = Object.keys(providedRules).sort();

test("All rules are present.", () => {
  expect(allRulesKeys).toEqual(providedRulesKeys);
});
