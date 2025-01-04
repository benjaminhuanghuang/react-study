import hasOwnProperty from "shared/hasOwnProperty";
import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";
const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};

function hasValidKey(config) {
  return config.key !== undefined;
}
function hasValidRef(config) {
  return config.ref !== undefined;
}

// return virtual DOM element
function ReactJSXElement(type, key, ref, props) {
  debugger
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type, // h1, span
    key,
    ref, // ref to real dom
    props, // children, style
  };
  return element;
}

export function jsxDEV(type, config) {
  console.log("jsxDEVxx----", type);
  debugger;
  let props = {};
  let key = null;
  let ref = null;
  if (hasValidKey(config)) {
    key = config.key;
  }
  if (hasValidRef(config)) {
    ref = config.ref;
  }

  for (let propsName in config) {
    if (hasOwnProperty.call(config, propsName) && !RESERVED_PROPS[propsName]) {
      props[propsName] = config[propsName];
    }
  }
  return ReactJSXElement(type, key, ref, props);
}
