import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  let [count , setCount] = useState(0)

  function IncreaseCount(){
    setCount(count+1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onClick={IncreaseCount}>Click me</button>
    </div>
  )
}

export default App
