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

  setState(newState) {
    // copy object
    Object.assign(this.state, newState);
    renderComponent(this);
  }
}

class HomeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(props) {
    console.log("componentWillReceiveProps", props);
  }

  componentWillUpdate(props) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(props) {
    console.log("componentDidUpdate");
  }

  componentDidMount(props) {
    console.log("componentDidMount");
  }
  handlerClick() {
    this.setState({
      num: this.state.num + 1,
    });
  }
  render() {
    return (
      <div className="active">
        <h3 className="title">This is Class component {this.state.num}</h3>
        <button onClikc={this.handleClick.bind(this)}>click</button>
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

function setComponentProps(comp, props) {
  if (!comp.base) {
    if (comp.componentWillMount) {
      comp.componentWillMount();
    } else if (comp.componentWillReceiveProps) {
      comp.componentWillReceiveProps(props);
    }
  }
  comp.props = props;
  renderComponent(comp);
}

function renderComponent(comp) {
  let base;
  const jsxObject = comp.render();
  let base = _render(jsxObject);
  if (comp.base && comp.componentWillUpdate) {
    // is loaed
    comp.componentWillUpdate();
  }

  if (comp.base) {
    if (comp.componentDidUpdate) {
      comp.componentDidUpdate;
    } else if (comp.componentDidMount) {
      comp.componentDidMount();
    }
  }

  // update/replace node
  if (comp.base && comp.base.parentNode) {
    comp.base.parentNode.replaceChild(base, comp.base);
  }
  comp.base = base;
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
    return _render(jsxObject);
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
  if (vnode.children) vnode.children.forEach((child) => render(child, dom));

  return dom;
}

ReactDOM.render("Text node...", document.querySelector("#root"));
ReactDOM.render("DOM node...", document.querySelector("#root2"));
