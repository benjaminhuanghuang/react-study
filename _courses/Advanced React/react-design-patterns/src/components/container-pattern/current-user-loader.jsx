import React, { useEffect } from "react";
import { useState } from "react";
//
import axios from "axios";


export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("api/current-user");
      setUser(response.data);
    })();
  }, []);  // runs only once

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
