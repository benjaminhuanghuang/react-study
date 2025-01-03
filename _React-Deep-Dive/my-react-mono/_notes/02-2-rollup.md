

## Install
```sh
pnpm i rollup -D -w
pnpm i -D -w rollup-plugin-generate-package-json
pnpm i -D -w rollup-plugin-typescript2
pnpm i -D -w @rollup/plugin-commonjs
pnpm i -D -w rimraf
```

@rollup/plugin-commonjs：用于将 CommonJS 模块转换为 ES 模块，以便在 Rollup 中进行打包。CommonJS 是一种用于在浏览器之外执行 JavaScript 代码的模块规范，而 Rollup 默认只支持 ES 模块

运行 npm run build-dev，可以看到，根目录下的 dist/node_modules/react 文件夹中出现了 react 包的打包产物：
index.js
jsx-dev-runtime.js
jsx-runtime.js
package.json
