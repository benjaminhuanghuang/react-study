/*
  DIY 
  React.createElement() method
  ReactDOM.render()
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

const ReactDOM = {
  render,
};

function render(vnode, container) {
  if (vnode === undefined) return;

  // render text and return 
  if (typeof vnode === "string") {
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }
  
  // render virtual DOM
  const { tag, attrs } = vnode;
  const dom = document.createElement(tag);

  // set attribute for the dom element
  if (attrs) {
    Object.keys(attrs).forEach((key) => {
      const value = attrs[key];
      if (key == "className") {
        key = "class";
      }
      if (/on\w+/.test(key)) {
        // event
        key = key.toLowerCase();
        dom[key] = vlaue || "";
      } else if (key == "style") {
        // style
        if (!value || typeof value === "string") {
          dom.style.cssText = value || "";
        } else if (value && typeof value === "object") {
          for (let k in value) {
            if (typeof value[k] == "number") {
              dom.style[k] = value[k] + "px";
            } else {
              dom.style[k] = value[k];
            }
          }
        }
      } else {
        // other attribute
        if (key in dom) {
          dom[key] = value || "";
        }
        if (value) {
          dom.setAttribute(key, value);
        } else {
          dom.removeAttribute(key);
        }
      }
    });
  }
  // render sub element
  vnode.children.forEach((child) => render(child, dom));

  return container.appendChild(dom);
}

ReactDOM.render("Text node...", document.querySelector("#root"));
ReactDOM.render("DOM node...", document.querySelector("#root2"));
