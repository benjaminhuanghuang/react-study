import React, { useState } from 'react';

export default function SetStateQuestion() {
  let [count, setCount] = useState(0);

  /*
    count should be declared as a let variable, not a const variable

  */
  function incrementTwice1() {
    count = count + 1;     
    console.log("After First +1:", count);   // count is 1 but UI is not updated
    count = count + 1;
    console.log("After Second +1:", count);   // count is 2 but UI is not updated

    // keeping clicking the button, the count will be updated to 3, 4, 5, 6  
    //  but not in the UI
  }

  /*
    0
    0
    1
    1
    2
    2
   
    setCount is asynchronous, count is not updated immediately after setCount is called
  */
  function incrementTwice2() {
    setCount(count + 1);
    console.log("After First setCount:", count);   
    setCount(count + 1);
    console.log("After Second setCount:", count);  
  }

  /*
    the callback function is not called immediately
    0
    0
    2
    2
    4
    4
  */
  function incrementTwice3() {
    setCount((count) => count + 1);
    console.log("After First setCount:", count);   
    setCount((count) => count + 1);
    console.log("After Second setCount:", count);  
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementTwice1}>Increment +1</button>
      <button onClick={incrementTwice2}>Increment setCount</button>
      <button onClick={incrementTwice3}>Increment setCount</button>
    </div>
  );
}