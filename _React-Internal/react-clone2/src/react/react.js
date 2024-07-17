const REACT_ELEMENT_TYPE = Symbol.for('react.element');

function ReactElement(type, key, props) {
  let element = {
    $$type: REACT_ELEMENT_TYPE, 
    type,  // type: 'div'  | type : MyComponent
    key, 
    props
  }
  return element
}


function createElement(type, propss= {}, children) {
  let _props = Object.assign({}, props);
  let key = _props.key ||null;
  let children_length = children.lenght;
  _props.children = children_length === 0 ? null : children_length===1 ? children[0]: children
  return ReactElement(type, _key, _props);
}

class Component {
  constructor(props, context, updater) {
    this.props = props;
    this.context = context;
    this.updater = updater || null;
  }

  get isReactComponent(){
    return  true;
  }

  setState(partialState, callback){
    if(partialState instanceof Object || typeof partialState === 'function'){
      let _setState = this.updater.enqueueState;
      _setState && _setState(this, partialState, callback, 'setState');
    }
  }

}


const React = {
  createElement: function(type, props, ...children){
    let element = this.createElement(type, props, children);
    return element;
  },
  Component
}


export default React