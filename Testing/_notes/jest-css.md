使用 identity-obj-proxy mock CSS Modules。

// 1. install
yarn add --dev identity-obj-proxy
// 2. 修改 package.json 中关于 jest 的配置
"jest": {
  ...
  "moduleNameMapper": {
    "\\.(css|less)$": "identity-obj-proxy"
  }
},