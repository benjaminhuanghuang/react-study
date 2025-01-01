import React, { useState, useEffect } from "react";

import {Hello} from './cleanup'

export const App = () => {
  useEffect(() => {
    const onMouseMove = (e:any) =>{
      console.log(e)
    }

    window.addEventListener('mousemove', onMouseMove)
    return ()=>{
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);

  return (
    <div>
      Hello
    </div>
  );
};
