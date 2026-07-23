import { useState } from "react";
import { useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(()=>{document.title=(count)},[count])
  const [bgColor, setBgColor] = useState("white");

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>{count}</h2>

      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>

      <br /><br />

      <button onClick={() => setBgColor("red")}>Red</button>
      <button onClick={() => setBgColor("green")}>Green</button>
      <button onClick={() => setBgColor("blue")}>Blue</button>
      <button onClick={() => setBgColor("white")}>Reset Color</button>
    
    {
        count>10 &&<p> Geater than 10</p>
    }
    </div>
  );
}
