import React, { useState } from "react"
import Home from "./components/Home"
import UseCallBack from "./components/UseCallBack"
import UseEffect from "./components/UseEffect"
import UseRef from "./components/UseRef"
import UseState from "./components/UseState"
function App() {
  const [count,setCount] = useState(0);
  
  return (
    <>
    <UseCallBack/>
    </>
  );
}

export default App;
