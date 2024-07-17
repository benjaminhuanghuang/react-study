# How React App Starts

1. Start from main.jsx
2. In the entry file, the React app starts by calling
```js
/*
React will create a root for the dom element 'root', 
and take over managing the DOM inside it. 
*/
ReactDOM.createRoot(document.getElementById('root')).render(<App />)

```
This function renders the App component three into the DOM
The App component is the root of the React components hierarchy.

```js
const tag = React.createElement("h1", {}, "Hello")
```

```html
<div id="root">
    <!--Content of the App component-->    
</div>
```




