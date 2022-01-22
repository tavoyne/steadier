# Usage

There are two ways of using Steadier. The first and recommended one is through the config package. You'll type a single line of code and be all set in less than a minute. However, your code architecture will be expected to follow [our few requirements](). Make sure to check them out as there's a big chance that you're doing things differently. If these requirements are impossible for you to follow, like for example if you're setting up Steadier on an existing codebase, you can compose your own config by using the plugins.

## Using the config package

### Installation

With npm:

```bash
npm install @steadier/eslint-config --save-dev --save-exact
```

With Yarn:

```bash
yarn add @steadier/eslint-config --dev --exact
```

### Usage

In your `.eslintrc.js` file:

```javascript
module.exports = {
  // ...
  extends: ["@steadier"],
};
```

That's basically it.

## Using the plugin packages
