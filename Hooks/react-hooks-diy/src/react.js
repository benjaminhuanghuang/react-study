import { ELEMENT_TEXT } from "./constants";
import {UpdateQueue} from './UpdateQueue';
import {scheduleRoot, useReducer, useState} from './scheduler';

// Create virtual DOM
function createElement(type, config, ...children) {
  return {
    type,
    props: {
      ...config,
      children: children.map((child) => {
        // if is React of text
        return typeof child === "object"
          ? child
          : {
              type: ELEMENT_TEXT,
              props: { text: child, children: [] },
            };
      }),
    },
  };
}


class Component{
  constructor(props){
    this.props = props;
    this.updatQueue = new UpdateQueue();
  }

  // payload can be object or function
  setState(payload){
    let udpate = new Update(payload);
    // updatQueue 在类组件的fiber节点的internal节点
    this.internalFiber.updatQueue.enqueueUpate(update);
    this.updatQueue.enqueueUpate(update);
    scheduleRoot();
  }
}

Component.prototype.isReactComponent = {}; // is class Component


const React = {
  createElement,
  Component,
  useReducer,
  useState
};

export default React;
