# React Elements

- Recursion

- POJO (Plain Old JS Objects)

```js
function addElements (pojoElement, parentDOMNode) {
    let newDOMNode = pojoElement.type === "text" ? document.createTextNode(pojoElement.type): document.createElement (pojoElement.type);

    if (pojoElement.children) {
        pojoElement.children.forEach((child) => {
            addElements (child, newDOMNode) ;
        }) ;
    }
    console.log (parentDOMNode) :
    parentDOMNode. addElements (pojoElement:
}

addElement(markup, main)   
```

``` html
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin> </script>
<script src="app.js"></script>
```