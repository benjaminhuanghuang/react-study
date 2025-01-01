/*
https://www.youtube.com/watch?v=vpE9I_eqHdM

In this sample, setCount() triggers a re-render of the component.

*/


import React, { useMemo, useState } from 'react';

const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});

interface DemoProps {}

function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // Performance issue:
  // selectedItem is re-calculated every time the component re-renders.
  // const selectedItem = items.find((item) => item.id === count);
  
  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count, items],
  );

  return (
    <div className='tutorial'>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>  
        Increment
      </button>
    </div>
  );
}

export default Demo;