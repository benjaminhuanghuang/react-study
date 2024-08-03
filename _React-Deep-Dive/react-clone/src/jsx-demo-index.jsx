import React from "./react";

const ele = (
  <div>
    <h3 className="title">hello, react JSX!</h3>
  </div>
);

// https://babeljs.io/en/repl
const ele2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h3",
    {
      className: "title",
    },
    "hello, react using JS"
  )
);

React.render(ele2, document.getElementById("root"));
