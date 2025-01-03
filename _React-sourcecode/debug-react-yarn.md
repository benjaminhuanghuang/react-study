# Debug React

## 1. git pull react source code
```sh
git clone https://github.com/facebook/react.git
```
## 2. Build react, react-dom, scheduler
```sh
cd react 

yarn

yarn build react/index,react-dom/index,scheduler --type=NODE 
```
The output path: build/mode_modules

creates a global symlink for the package. Yarn registers this package globally in your system.
```sh
cd  build/mode_modules
cd react
yarn link

cd  build/mode_modules
cd react-dom
yarn link

cd  build/mode_modules
cd scheduler
yarn link

```
## 3. Create react app
```sh
npx create-react-app a-react-demo

yarn like react react-dom 
yarn start
```