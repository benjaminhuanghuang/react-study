import React from "react";
import ReactDOM from "react-dom";
//
// import { App } from "./01-useState/useState-comlex-state";
// import { App } from "./01-useState/useFormDemo";
// import {App} from './02-useEffect/useEffect-render'
// import {App} from './02-useEffect/useEffect-clean'
// import {App} from './02-useEffect/useEffect-event-handler'
// import {App} from './02-useEffect/useEffect-fetch-data'
// import {App} from './03-useRef/useRef-focus'

import {App} from './05-useCallback/useCallback-render'
// import {App} from './07-useLayoutEffect/useLayoutEffect'

// import {App} from './08-useReducer/useReducer-dispatch'


import UseEffectFireDemo from "./02-useEffect/useEffect-00-fire";
import UseEffectCleanup from "./02-useEffect/useEffect-01-cleanup";
import UseEffectFetchData from "./02-useEffect/useEffect-02-fetch-data";


ReactDOM.render(<UseEffectFetchData/>, document.getElementById("root"));
