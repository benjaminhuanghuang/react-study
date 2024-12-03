## Run react code on command line
Install dependency
```
"@babel/node": "^7.7.4",
"@babel/core": "^7.7.5",
"@babel/preset-env": "^7.7.6",
"@babel/preset-react": "^7.7.4"
```
and .babelrc
```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

Run 
```
    npx babel-node _research/redux-test.js
```

