/*
  DIY React.createElement() method
*/

const React = {
  createElement,
};

function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children,
  };
}

const ele = (
  <div className="active">
    <h3 className="title">This is DIY react</h3>
  </div>
);

console.log(ele);
