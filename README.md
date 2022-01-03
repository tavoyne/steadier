## WORK IN PROGRESS

Although common sense led the most of us to the same conclusion, the advent of Prettier in the
recent years demonstrated that the ecosystem was in need for a configless, opinionated way of
checking its code.

Convergence is an attempt to extend all the good Prettier has brought to code formatting to code
quality checking.

What's important about Convergence is that it will be built by and for the community. Every rule
will have its own discussion on GitHub. Collaborators will be invited to share their experience with
it. If there's no direct answer and under certain conditions, a vote will take place.

Convergence is fully integrated with Prettier (no conflicting rules).

⚠️ Convergence today is stupidely strict, this is why it is not yet recommended for use in
production applications. If you're a warrior and want to integrate it anyway (we thank you for it),
you of course have the possibility to overrride the rules anyway.

It will cover all file types modern javascript applications take advantage of, i.e. ~ all extensions
supported by Prettier.

As we can't reinvent the wheel in one single shot, the idea for the V1 is to take advantage of
ESLint and existing ESLint plugins. But, the idea in the long-term is to be dependency free, i.e. to
have our own Linter that's faster and tailored to our needs, our own set of rules, etc.

V1 is expected to be stable by the end of 2022.

# Why Convergence?

We all noticed that, in Javascript, there's often more than one way to code the same thing.

Between those, there's usually one that stands out from the other. When there's not, we just need to
pick one and stick with it.

Convergence helps with that. Basically, we try to have a good overview of all a rule's use cases,
and then just make a decision, collectively.

We live in a world in which Babel exists. This means that, even if your target user is a texan
farmer and his 2002 PC, you should be writing code in a ES21 fashion. Why is that great? Because it
means that we can enforce uniform styling over all our projects, no matter what browsers we're
targetting.

# The constitution

1. Convergence is OPINIONATED. This means that it implements what works best IN GENERAL. Using
   Convergence will probably sometimes require you to change the way you code. This is normal, and
   this is for the best. If you can't live with it, you can override any rule, though it isn't
   recommended.
2. Convergence favorises rules that enforce one syntax and forbid all other ones. If there's still
   two ways of writing something after running Convergence, Convergence team is sad.
3. Convergence cares about **code quality rules** not formatting. Formatting is left to Prettier who
   killed the thing.

# Getting started

If you want to be up and running in seconds, just download the config package:

```bash
npm install --save-dev --save-exact @convergence/eslint-config
```

```bash
yarn add --dev --exact @convergence/eslint-config
```

And add it to your .eslintrc.js file:

```jsonc
{
  // ...
  "extends": ["@convergence"]
}
```

That's basically it!

BUT, now you're checking all kind of files (YAML, etc.). If you only want to lint a specific set of
files and are afraid of downloading the whole set of plugins (which you should be if you're
performing CI), you can download each plugin individually:

```bash
npm install --save-dev --save-exact @convergence/eslint-plugin-react
```

```bash
yarn add --dev --exact @convergence/eslint-plugin-react
```

And use them that way:

```jsonc
{
  // ...
  "extends": [
     "plugin:@convergence/react"
     "plugin:@convergence/yaml",
     // ...
   ]
}
```
