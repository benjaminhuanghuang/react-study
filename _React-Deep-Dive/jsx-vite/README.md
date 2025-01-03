# 珠峰架构手写react18源码-01实现JSX

## Setup
```sh
npm init

npm i -D vite @vitejs/plugin-react
```

Add package.json script
```json
    "dev": "vite"
```
Vite detects the .jsx file and passes it through the JSX Babel plugin @vitejs/plugin-react.
If you're using React 17+, the JSX is transformed into calls to jsxDEV from jsx-dev-runtime.ts.