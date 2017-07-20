// Use https://babeljs.io/repl/  transpile jsx to javascript
//let jsx = <p> hello </p>;

var jsx = React.createElement(
  "p",    // tag
  null,   // attribute
  " hello "   // content
);

ReactDOM.render(jsx, document.getElementById('app'));