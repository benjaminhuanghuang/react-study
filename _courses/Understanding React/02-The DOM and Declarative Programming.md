# The DOM and Declarative Programming


```js
const listElement = document.getElementById('list');
const newLiListItem = document.createElement('li');
newListItem.textContent = "Item 1";
listElement.appendChild(newListItem);
```



## IMPERATIVE PROGRAMMING
A style of programming in which you describe `how` a program should accomplish a task.
```js
const countElement = document .getElementById ("count");

function setCount() {
    let count = Number (countElement.textContent);
    count = count + 1;
    countElement.textContent = count;
}
```

## DECLARATIVE PROGRAMMING
A style of programming in which you describe `what you want` the program to accomplish without
describing how.

A declarative system is always built on top of an imperative one.

```js
const countApp = {
    getCount: () => {
        const countElement = document.getElementById("count");
        return Number (countElement. textContent) ;
    },
    setCount: (val) => {
        const countElement = document.getElementById( "count");
        countElement. textContent = val;
    }
}

// Declarative 
function setCount () {
    let count = countApp.getCount();
    if (count >= 5) {
        countApp.setCount (0);
    } else {
        countApp.setCount (count + 1);
    }
}
```

## POJO
Plain Old Javascript Objects, simple collections of name/value pairs.

```js
function addElements(pojoElement, parentDOM) {
    let newDOM = pojoElement.type == 'text' ? document.createTextNode(pojoElement.value) : document.createTextNode(pojoElement.type);
    if(pojoElement.children) {
        pojoElement.children.forEach((child) =>{
            addElements(child, newDOM);
        })
    }
    parentDOM.appendChild(newDOM);
}

addElements(markup, document.getElementById('app'));
```

## React
```js
const rootNode = document.getElementById("app");
Const root = ReactDOM.createRoot (rootNode);
root.render(React.createElement(App));
console.log(React) ;

function App() {
    console. log("Called App");
    return React.createElement ("article", null, 
        React.createElement('h2', null, 'Counter'),
        React.createElement('p', null, 'You click N times'),
        React.createElement('button', null, 'Click'),

    );
}

console.log(App);

// before React does its work
const articleElement = document.getElementByTagName('article');
console.log(articleElement);

// After React does its work
setTimeout(function() => {
    const articleElement = document.getElementByTagName('article');
    console.log(articleElement);
}, 1ßßß000)
```
