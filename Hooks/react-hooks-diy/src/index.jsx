import React from "./react";
import ReactDOM from "./react-dom";

let style = { border: "2px solid red", margin: "5px" };
let element = (
  <div id="A1" style={style}>
    A1
    <div id="B1" style={style}>
      B1
      <div id="C1" style={style}>
        C1
      </div>
      <div id="C2" style={style}>
        C2
      </div>
    </div>
    <div id="B2" style={style}>
      B2
    </div>
  </div>
);
console.log(element);
ReactDOM.render(element, document.getElementById("root"));

let render2 = document.getElementById("render2");

render2.addEventListener("click", () => {
  let element = (
    <div id="A1-New" style={style}>
      A1-New
      <div id="B1-New" style={style}>
        B1
        <div id="C1-New" style={style}>
          C1-New
        </div>
        <div id="C2-New" style={style}>
          C2-New
        </div>
      </div>
      <div id="B2-New" style={style}>
        B2-New
      </div>
      <div id="B3" style={style}>
        B2-New
      </div>
    </div>
  );

  ReactDOM.render(element, document.getElementById("root"));
});

let render3 = document.getElementById("render3");

render3.addEventListener("click", () => {
  let element = (
    <div id="A1-New2" style={style}>
      A1-New2
      <div id="B1-New2" style={style}>
        B1-New2
        <div id="C1-New2" style={style}>
          C1-New2
        </div>
        <div id="C2-New2" style={style}>
          C2-New2
        </div>
      </div>
      <div id="B2-New2" style={style}>
        B2-New2
      </div>
    </div>
  );

  ReactDOM.render(element, document.getElementById("root"));
});
