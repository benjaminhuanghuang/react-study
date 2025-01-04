# 前端跳槽突围课：React18底层源码深入剖析 - 高少云

Monorepo + pnpm + vite + vitest

https://coding.imooc.com/class/818.html

https://www.bilibili.com/video/BV1SDm2Y3ETD

https://www.bilibili.com/video/BV1NvCzYvEBT   2025

https://pan.baidu.com/s/1KiXQ93iYmRnYDTKnoL75QA?pwd=84ca

## Setup

Setup monorepo

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

Create sample code
```sh
npm init -y
npm i -D prettier vitest

npm create vite examples --template react-ts

mkdir packages
```

run test
```sh
pnpm test
```


## Scheduler
Find min value in array. 
Leetcode 703. Kth Largest Element in a Stream 

MiniHeap


## VDOM
Reconcile : sync the VDOM with real DOM


