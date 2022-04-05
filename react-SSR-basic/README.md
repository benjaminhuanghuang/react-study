# React SSR setup

```
  # suppor ES6
  npm i -D @babel/core @babel/node          

  # support react
  npm i -D @babel/preset-react @babel/preset-env
 
  npm i express
  
  npm i react react-dom

  npm i nodemon -D
```

.baelrc
```
{
  "presets": ["@babel/preset-react","@babel/preset-env"]
}
```

script
```
  nodemon -exec babel-node src/server.js
```


## react-dom/server 
- renderToString : create HTML with attribute like data-react-id

- renderToStaticMarkup: without extra attributes


