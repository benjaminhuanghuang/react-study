import React from "react";

export default function App({ list }) {
  return (
    <div>
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
