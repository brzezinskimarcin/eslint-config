# @brzezinskimarcin/eslint-config 🎨

[![npm](https://img.shields.io/npm/v/@brzezinskimarcin/eslint-config)](https://npmjs.com/package/@brzezinskimarcin/eslint-config)
[![GitHub license](https://img.shields.io/github/license/brzezinskimarcin/eslint-config)](https://github.com/brzezinskimarcin/eslint-config/blob/main/LICENSE)

ESlint config based on [antfu/eslint-config](https://github.com/antfu/eslint-config) with the following differences:
- require semicolons
- prefer [one true brace style](https://eslint.org/docs/latest/rules/brace-style#1tbs)
- always require [curly brackets](https://eslint.org/docs/latest/rules/curly)
- for typescript projects: [prohibit enums](https://www.youtube.com/watch?v=jjMbPt_H3RQ)
- some more strict checks, especially for typescript and vue
- built-in support for pug

## Usage

### Install

```bash
pnpm add -D eslint @brzezinskimarcin/eslint-config
```

### Config `.eslintrc.js`

##### JavaScript:
```js
module.exports = {
  extends: '@brzezinskimarcin'
}
```
> You don't need `.eslintignore` normally as it has been provided by the preset.

##### TypeScript :
```js
process.env.ESLINT_TSCONFIG = 'tsconfig.json';

module.exports = {
  extends: '@brzezinskimarcin'
}
```

> It assumes your file with typescript configuration is named `tsconfig.json`.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

- original: [MIT](https://github.com/antfu/eslint-config/blob/main/LICENSE) License &copy; 2019-PRESENT [Anthony Fu](https://github.com/antfu)
- modifications: [MIT](./LICENSE) License &copy; 2023-PRESENT [Marcin Brzeziński](https://github.com/brzezinskimarcin)
