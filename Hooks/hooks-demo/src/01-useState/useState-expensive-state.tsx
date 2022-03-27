import React, { useState } from "react";

function expensiveComputation() {
  //
  return 5;
}
export const App = () => {
  // Pass funciton to useState() method
  // expensiveComputation is call on the first time and not on every signle time
  const [count, setScount] = useState(() => expensiveComputation());

  return <div></div>;
};
