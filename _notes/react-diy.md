# React DIY

## Babel translat JSX to JS
Babel repl : https://babeljs.io/en/repl
```
<div id="id" key="key">
  <span>1</span>
  <span>2</span>
</div>
  
```
To
```
React.createElement("div", {
    id: "id",
    key: "key"
  },
  React.createElement("span", null, "1"), 
  React.createElement("span", null, "2")
);
```

## DIY React.createElement
Create a javascript object as the virtual DOM
```
function createElement(tag, attrs, ...children)
```

- ReactElement source code
https://github.com/facebook/react/blob/master/packages/react/src/React.js
https://github.com/facebook/react/blob/master/packages/react/src/ReactElement.js


## DIY ReactDOM.render
Render the virtual DOM
```
function render(vnode, container)
```


##


