import React from "./react";

function say(){
  console.log("say");
}

let element = React.createElement("div", { name: "xxx" }, 'hello', React.createElement("span", {}, "123"));

let element2 = React.createElement("div", { name: "xxx" }, 'hello', React.createElement("button", {onClick:say}, "123"));


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number : 1}
  }

  render(){
    return this.state.number;
  }
}

console.log(element);

//React.render("Hello", document.getElementById("root"));
//React.render(element2, document.getElementById("root"));
React.render(React.createElement(Counter, {name:"xxx"}), document.getElementById("root"));

    