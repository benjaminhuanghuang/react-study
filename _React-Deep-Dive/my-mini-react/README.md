# My Mini React

Monorepo + pnpm + vite + vitest

https://www.bilibili.com/video/BV1SDm2Y3ETD


## Setup
```sh
npm init -y
npm i -D prettier vitest

npm create vite examples --template react-ts

mkdir packages
```

setup monorepo
create pnpm-workspace.yaml
```sh
mkdir react && cd react && pnpm init
mkdir react-dom && cd react-dom && pnpm init
mkdir react-reconciler && cd react-reconciler && pnpm init
mkdir scheduler && cd scheduler && pnpm init
mkdir shared && cd shared && pnpm init

pnpm add vitest -Dw

# add dependencies for scheduler
pnpm add shared --filter scheduler
```

run test
```sh
pnpm test
```


## Scheduler
Find min value in array. 
Leetcode 703. Kth Largest Element in a Stream 

MiniHeap



