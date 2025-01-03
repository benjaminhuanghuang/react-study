# Setup mono repo

```sh
pnpm init

touch pnpm-workspace.yaml

```
pnpm-workspace.yaml define the root folder of the workspace

## Setup eslint
```sh
pnpm i eslint -D -w
pnpm i -D -w @typescript-eslint/eslint-plugin, @typescript-eslint/parser, typescript
```

Create .eslintrc.json file
```sh
npx eslint --init
```

Install eslint plugin for ts
```
pnpm i @typescript-eslint/eslint-plugin -D -w
```

## setup prettier
```sh
pnpm i prettier -D -w
```
Create .prettierrc.json config file

Integrate prettier with eslint
```sh
pnpm i eslint-config-prettier eslint-plugin-prettier -D -w
```
eslint-config-prettier：overwrite eslint rules
eslint-plugin-prettier：use prettier when execute eslint --fix

Add lint script to package.json
```
"lint": "eslint --ext .ts,.jsx,.tsx --fix --quiet ./packages"
```
## Setup commit rule
https://medium.com/@abpeter14/how-to-install-commitlint-husky-2024-f1157f14006f
```sh
pnpm i husky -D -w
```

init husky, create the .husky folder
```sh
npx husky init
```

Add commands to the husky script .husky/pre-commit
```sh
pnpm lint
```

Define the commit information
```sh
pnpm i commitlint @commitlint/cli @commitlint/config-conventional -D -w
```
create config file .commitlintrc.js

Integrate commitlint with husky, add command to .husky/commit-msg
```sh
npx commitlint --edit $1
```


## setup typescript

Create tsconfig.json

## Setup rollup
```sh
pnpm i rollup -D -w

mkdir scripts/rollup
```

