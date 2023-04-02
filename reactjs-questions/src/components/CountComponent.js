// Using hooks to get update regarding any state value into function component.
// Into function component show example for hooks (useState,UseEffect,UseCallback, useContext)
// create a Div reference and Using Div reference scroll into Div

import React, { useState, useEffect, useCallback, useContext } from "react";
import { CountContext } from "./CountContext";
import PropComponent from "./PropComponent";
import { useRef } from "react";

export default function CountComponent() {
  const [count, setCount] = useState(0);
  const myDivRef = useRef(null);

  useEffect(() => {
    console.log(`The count is now ${count}.`);
  }, [count]);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleScrollIntoView = useCallback(() => {
    myDivRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const value = useContext(CountContext);

  return (
    <div style={{ height: "500px", overflow: "auto" }}>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <p>Context value: {value}</p>
      <PropComponent data={count} />

      <div style={{ height: "1000px" }}>
        {/* This is a long div that will cause scrolling */}
      </div>
      <button onClick={handleScrollIntoView}>Scroll to bottom</button>
      <div ref={myDivRef}></div>
    </div>
  );
}
