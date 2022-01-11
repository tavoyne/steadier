# Introduction

> :warning: Warning
>
> This is work in progress. It is not ready for use in production applications just yet.

The advent of [Prettier](https://prettier.io/) in the recent years demonstrated that the ecosystem was in need for a configless, opinionated way of checking code.

Steadier is an attempt to extend all the good [Prettier](https://prettier.io/) has brought to code formatting to code-quality checking.

# Installation

With npm:

```bash
npm install @steadier/eslint-config --save-dev --save-exact
```

With Yarn:

```bash
yarn add @steadier/eslint-config --dev --exact
```

# Usage

In your `.eslintrc.js` file:

```javascript
module.exports = {
  // ...
  extends: ["@steadier"],
};
```

And that's basically it.

# Editor integration

## VSCode

First, make sure that you have the [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) installed.

Then, in your `.vscode/settings.json` file, add:

```jsonc
{
  // ...
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
  "eslint.validate": ["json", "json5", "jsonc", "yaml", "yml"]
}
```

The first line enables error auto-fixing on save. The second line enables JSON/YAML-files checking.

# Why Steadier

- Half of the rules are auto-fixable, which means that you're writting better code without writting better code.
- It's fully integrated with [Prettier](https://prettier.io/) (no conflicting rules).
- It will open you the door to fancy ES2022-developers private clubs (they exist), you ES5 rube.
- Your code style will be uniform across your projects and all other projects using Steadier.
- No more endless discussions, collaboration made easy.

# Philosophy

Steadier is built _by_ and _for_ the community.

Feeling badly about a rule? Open a discussion on GitHub. Present your arguments. If there's 20+ :thumbsup: on your initial comment, the discussion will be turned into an issue, discussed more thoroughly and, depending on the conclusion, fixed and added to the next release. Follow [this link](CONTRIBUTING.md) to learn more about how to contribute.

# Constitution

1. Steadier is _OPINIONATED_. This means that it implements what works best _IN GENERAL_. Be aware that using Steadier will probably sometimes require you to change the way you code. Believe us, this is for the best.
2. Steadier cares about code _quality_ not _formatting_. Formatting is left to [Prettier](https://prettier.io/) who killed the damn thing.
3. ...

# Why is it a good time for Steadier?

> Web developers of all countries, unite!

We live in a world in which [Babel](https://babeljs.io/) exists. This means that, even if your target user is a texan farmer and his 2002 PC (don't judge, it's a promising niche), you should be writing code in an _esnext_ fashion. Why is that great? Because it means that, no matter what kind of developer you are, we can all share the same style guide, enforce the same conventions, push the web forward in unity.

Every year, [TC39](https://tc39.es/) is making JavaScript a bit better. Unfortunately, most developers (especially newcomers) are not aware of the latest novelties and deprecations.

# The future of Steadier

We can't reinvent the wheel in one single shot. In V1, we'll take advantage of ESLint and existing ESLint plugins. But, expect Steadier to be dependency-free in a near future.

# Supported formats and libraries

- JavaScript
- JSX
- JSON
- YAML
- Node
- React
- TypeScript

:rocket: And more to come.
