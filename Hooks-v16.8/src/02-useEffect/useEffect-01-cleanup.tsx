import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  console.log('component render');
  
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  /*
  为了演示 cleanup，这里没有使用 scond parameter []，因此每次component render都会调用 window.addEventListener，
  同时 React 会在执行当前 effect 之前对上一个 effect 进行清除，调用window.removeEventListener
  */
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);

    return () => {
      console.log('cleanup'+Date.now());
      window.removeEventListener('resize', checkSize);
    };
  });

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;