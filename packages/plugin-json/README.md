🚧 **WORK IN PROGRESS** 🏗

## Installation

With npm:

```bash
npm install @steadier/eslint-plugin-json --save-dev -save-exact
```

With Yarn:

```bash
yarn add @steadier/eslint-plugin-json --dev --exact
```

## Usage

In your `.eslintrc.js` file:

```javascript
module.exports = {
  extends: [
    // ...
    "@steadier/json/recommended",
  ],
};
```

Note: we strongly advise against building your own config from the plugin (using `plugin` and `rules`), as it would defeat the purpose of Steadier, which is to make code-quality checking uniform and configless, kind of what [Prettier](https://prettier.io/) is doing with code formatting. Follow [this link](..) to learn more about Steadier.

If you feed badly about a specific rule, you have two options:

- [Start a discussion](https://github.com/theoavoyne/steadier/discussions) to present your arguments. The discussion should be named as the rule in question (e.g. `jsonc/sort-keys`). If the initial comment reaches 20+ thumbs up, it will be turned into an issue, discussed more thorougly and, if needed, fixed and added to the next release.
- Disable it inside an override. For example, if you really don't want keys to be sorted in `./package.json`:

```javascript
module.exports = {
  extends: [
    // ...
    "@steadier/json/recommended",
  ],
  overrides: [
    {
      files: ["/package.json"],
      rules: {
        "jsonc/sort-keys": "off",
      },
    },
  ],
};
```

But, unless in some specific situations, this will typically not be needed. You should use it as a temporary measure if you're transitioning a large codebase.

## Extensions

Files with the following extensions will be checked:

- `.json`
- `.jsonc`
- `.json5`

## Editor integration

### VSCode

By default, the [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) doesn't check`.json` files. You have to enable this behaviour manually. In your `.vscode/settings.json` file:

```jsonc
{
  // ...
  "eslint.validate": ["json", "json5", "jsonc"]
}
```

## Parser

[jsonc-eslint-parser](https://github.com/ota-meshi/jsonc-eslint-parser) by [@ota-meshi](https://github.com/ota-meshi).

## Third-party plugins

- [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc) by [@ota-meshi](https://github.com/ota-meshi).
