import { useState, useEffect } from "react";

function UseEffectComponent() {
  const [val, valSet] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      /*
        if use
        valSet(val + 1); 
        UI shows 2

        if use a function (v) => v + 1
        v is the current value
      */
      valSet((v) => v + 1);
    }, 1000);
    // return a clean up function
    return () => window.clearInterval(timer);
  }, []);

  return <div>{val}</div>;
}

export default UseEffectComponent;
