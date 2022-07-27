import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [desc, setDesc] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        style={{
          padding: "20px",
          fontSize: "18px",
          fontWeight: "bold",
          backgroundColor: "green",
          borderColor: "green",
          color: "#fff",
        }}
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
      <h2>{count}</h2>
    </div>
  );
};

export default Counter;
