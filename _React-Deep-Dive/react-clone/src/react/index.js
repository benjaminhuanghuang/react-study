
import $ from 'jquery'
import createReactUnit from './unit'

import createElement from './element'

import Component from './component'

let React = {
  render,
  nextRootIndex:0,
  createElement,
  Component,
}

// 
function render(element, container)
{
  let createReactUnitInstance = createReactUnit(element);

  let markUp = createReactUnitInstance.getMarkUp(React.nextRootIndex);

  $(container).html(markUp);
}


export default React;

