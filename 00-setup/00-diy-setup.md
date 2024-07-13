## Setup
```
  npm init

  npm i react react-dom

  npm i webpack webpack-cli webpack-dev-server --save-dev

  npm i babel-loader @babel/preset-react --save-dev
  
  npm i css-loader style-loader --save-dev
```
Create webpack.config


Create script
```
  "scripts": {
    "start": "webpack serve --env development",
    "build": "webpack --env production"
  },
```
