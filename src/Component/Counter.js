import React, { useState } from "react";
import "../index.css";

function Counter() {
  let intialCount = 0;
  let [count, setCount] = useState(intialCount);
  if (count < 0) {
    count = 0;
  }

  let btn = {
    color: "white",
    fontWeight: "bolder",
    outline: "none",
    cursor: "pointer",
    padding: "14px 20px",
    marginLeft: "20px",
    fontSize: "20px",
    border: "none",
    color: "black",
    boxShadow: "5px 5px 10px black",
  };

  return (
    <div
      style={{
        boxShadow: "0px 0px 10px black",
        padding: "20px",
        marginTop: "50px",
        backgroundColor: "#29bb89",
        width: "30rem",
      }}
      className="main"
    >
      <h1>Counter App in React Js🦸 </h1>
      <h1 style={{ fontSize: "4.5rem" }}>{count}</h1>
      <button
        style={btn}
        className="incre btn"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={btn}
        className="reset btn"
        onClick={() => setCount(intialCount)}
      >
        Reset
      </button>
      <button
        style={btn}
        className="decre btn"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
