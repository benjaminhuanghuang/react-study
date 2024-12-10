

## Support camelCase
JSX use strokeLinecap instead of stroke-linecap.
to support stroke-linecap, need to 

Install
```sh
npm install eslint-plugin-react --save-dev
npm install eslint-plugin-jsx-a11y --save-dev
```

Modify eslint.config.js
```js
    extends: [
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ],
```