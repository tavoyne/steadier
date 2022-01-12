# Introduction

> :mega: Hear ye, hear ye!
>
> If you're an experienced developer, a seasoned library maintainer, an unrivaled strategist or a designer of genius, Steadier needs you. It's an ambitious project that I won't be able to carry out on my own. Its success depends on people like you. It's completely new, so every brick remains to be laid. Reach me if you're willing to join the adventure: [theo@blackjelly.co](mailto:theo@blackjelly.co) @theoavoyne.

The advent of [Prettier](https://prettier.io/) in the recent years demonstrated that the ecosystem was in need for a configless, opinionated way of checking code.

Steadier is an attempt to extend all the good [Prettier](https://prettier.io/) has brought to _code formatting_ to _code-quality checking_.

# Why Steadier?

> _Web developers of all countries, unite!_

We live in a world in which [Babel](https://babeljs.io/) exists. This means that, even if your target user is a texan farmer and his 2002 PC (don't judge, it's a promising niche), you should be writing code in an _ES2021_ fashion. Why is that great? Because it means that, no matter what kind of web developer you are, we can all share the same style guide, enforce the same conventions, push the web forward in unity. Isn't that beautiful?

Every year, [TC39](https://tc39.es/) is making JavaScript (formally, ECMAScript) a bit better. Unfortunately, most developers (especially newcomers) are not aware of the latest novelties and deprecations. This causes all the code produced by the ecosystem to be highly heterogeneous. And it's going worse every year when a new ECMA version is out, which is rather paradoxical. What if some tool could guide you in using the most modern syntaxes while avoiding common pitfalls?

Today, we're at an intersection. A lot of things have evolved recently, in a good way:

- Modules seem to have finally elected ES as their captain.
- Module resolution authority seems to be shifting from the compiler to the package manager (cf. [Plug'n'Play](https://yarnpkg.com/features/pnp) by [Yarn Berry](https://yarnpkg.com/)), meaning our children will probably never hear the words `node_modules` (and probably not complain about it).
- ... and so on.

All of this is great, but adoption of these features by our everyday tools is gradual. While you can feed Node (starting from v12) with some ES modules, the only thing [ESLint](https://eslint.org/) understands is still good old' CommonJS modules. In other words, files with different destinations are cohabiting in your repositories. It has become hard to set up your linter config in order to maintain homogeneity in your codebase. So much that we all got used to it being quite dirty.
