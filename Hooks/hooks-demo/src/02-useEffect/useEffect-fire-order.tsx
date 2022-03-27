import React, { useState, useEffect } from "react";

export const App = () => {
  
  /*
  */
  useEffect(() => {
    console.log("mount 1");
  }, []);

  useEffect(() => {
    console.log("mount 2");
  }, []);

  return (
    <div>
      Effect in order
    </div>
  );
};
