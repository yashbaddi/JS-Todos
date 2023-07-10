import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log("render");
  return (
    <>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Button {count}
      </button>
    </>
  );
}

export default App;
