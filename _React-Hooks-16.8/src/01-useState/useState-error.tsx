import React, {useState} from 'react'

export const App = ()=>{
  if(true)
  {
    // Error: React Hook "useState" is called conditionally. 
    // React Hooks must be called in the exact same order in every component render.
    useState();
  }
  return <div></div>
}