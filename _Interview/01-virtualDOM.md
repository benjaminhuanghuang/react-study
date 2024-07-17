The Virtual DOM is a JavaScript object representation of the actual DOM. Consider the HTML code snippet above, and below is the corresponding JavaScript object representation.


```js
const domTree = {
    tagName:'html';
    attributes: {},
    children:{
        tagName:'title';
        attributes: {},
        children: ['Title of Example'],
    }
}
```
