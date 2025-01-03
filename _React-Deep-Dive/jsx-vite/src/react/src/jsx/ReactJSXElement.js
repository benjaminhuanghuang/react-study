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
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
  };
  return element;
}

export function jsxDEV(type, config) {
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
    if(Object.prototype.hasOwnProperty.call(config, propsName) && !RESERVED_PROPS[propsName]) {
      props[propsName] = config[propsName];
    }
  }
  return ReactJSXElement(type, key, ref, props);
}
