import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [desc, setDesc] = useState("");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          width: "900px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <button onClick={() => setCount(count - 1)}>
          Click me to decrease by 1
        </button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>
          Click me to increase by 1
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        <Button text="Like Me" color="green" />
        <Button text="Hate Me" color="red" />
      </div>
      <input type="text" onChange={(e) => setDesc(e.target.value)} />
      <h1>{desc}</h1>
    </div>
  );
};

export default Counter;
