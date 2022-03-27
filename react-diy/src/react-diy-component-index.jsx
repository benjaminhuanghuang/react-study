/*
  React.createElement() method
  ReactDOM.render()
  React component <Header/>
*/
class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
  }
}

class HomeClass extends Component {
  render() {
    return (
      <div className="active">
        <h3 className="title">This is Class component</h3>
      </div>
    );
  }
}

function Home() {
  return (
    <div className="active">
      <h3 className="title">This is Functional component</h3>
    </div>
  );
}

console.log(<Home title="hello" />);
/*
{
  tag: function Home()
  attr: {title: 'hello'}
  children: []
} 
*/

const ReactDOM = {
  render,
};

function render(vnode, container) {
  return container.appendChild(_render(vnode));
}

function createComponent(comp, props) {
  let inst;
  // is class, class has render function
  if (comp.prototype && comp.prototype.render) {
    ints = new comp(props);
  } else {
    // is function component, convert it to class component
    ints = new Component(props);
    inst.constructor = comp;
    inst.render = function () {
      return this.constructor(props);
    };
  }
}


function _render(vnode) {
  if (vnode === undefined || vode === null || typeof vnode === "boolean") vnode = "";

  if (typeof vonde === number){
    vnode = String(vnode);
  }
  // render text and return
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  // if tag is function
  if (typeof vnode.tag === "function") {
    // 1. create component
    const comp = createComponent(vnode.tag, vnode.attrs);
    // 2. set attribute
    comps.props = props;
    // 3. render
    const jsxObject = comp.render();
    return  _render(jsxObject)
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

  return dom;
}

ReactDOM.render("Text node...", document.querySelector("#root"));
ReactDOM.render("DOM node...", document.querySelector("#root2"));
