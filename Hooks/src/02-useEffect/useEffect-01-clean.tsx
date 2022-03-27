import React, { useState, useEffect } from "react";

import {Hello} from './hello'

export const App = () => {
  const [showHello, setShowHello] = useState(true);

  return (
    <div>
      {showHello && <Hello />}
      <button
        onClick={() => {
          setShowHello(!showHello);
        }}
      >
        goggle
      </button>
    </div>
  );
};
