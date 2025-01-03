import { jsx } from "./react/jsx";
import { ReactElementType } from "@/shared/ReactTypes";
import { useState } from "@/react";

const App: any = () => {
  const [num, setNum] = useState(3);
  window.setNum = setNum;
  return num === 3 ? <Child onClick={() => setNum(4)} /> : <div>{num}</div>;
};

function Child() {
  return <span> Hello </span>;
}

import ReactDom from "@/react-dom";
const root = document.getElementById("root");
console.log("ReactDom", ReactDom);
ReactDom.createRoot(root).render(App);
