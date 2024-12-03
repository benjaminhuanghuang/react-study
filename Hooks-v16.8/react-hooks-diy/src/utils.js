/*
  set props on DOM
*/
export function setProps(dom, oldProps, newProps) {
  // Update or delete old prop
  for (let key in oldProps) {
    if (key !== "children") {
      if (newProps.hasOwnProperty(key)) {
        setProp(dom, key, newProps[key]);  // old have, new have, update
      } else {
        dom.removeAttribute(key);  // old have, new don't have
      }
    }
  }
  // Add new prop
  for (let key in newProps) {
    if (key !== "children") {
      if (!oldProps.hasOwnProperty(key)) { // new have, old don't have, set prop
        setProp(dom, key, newProps[key]);
      }
    }
  }
}

function setProp(dom, key, value) {
  if (/^on/.test(key)) {
    dom[key.toLowerCase()] = value;
  } else if (key === "style") {
    if (value) {
      for (let styleName in value) {
        dom.style[styleName] = value[styleName];
      }
    }
  } else {
    dom.setAttribute(key, value);
  } 
}
