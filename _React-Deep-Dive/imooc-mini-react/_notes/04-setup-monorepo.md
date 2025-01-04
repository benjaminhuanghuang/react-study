# Setup monorepo

Setup workspace
```sh
mkdir proj
cd proj
touch pnpm-workspace.yaml

mkdir packages
cd packages

mkdir react && cd react && pnpm init && cd ..
mkdir react-dom && cd react-dom && pnpm init && cd ..
mkdir react-reconciler && cd react-reconciler && pnpm init && cd ..

mkdir scheduler && cd scheduler && pnpm init && cd ..
mkdir shared && cd shared && pnpm init && cd ..

pnpm add vitest -Dw

# add dependencies for scheduler
pnpm add shared --filter scheduler
```

## Create sample app based on vite
```sh
cd proj
npm create vite examples --template react-ts

cd examples
pnpm i
pnpm dev
```
In /examples/which-react.ts import the mint-react library

## Run test
```sh
pnpm test
```