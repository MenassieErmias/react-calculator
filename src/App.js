import NumberInput from "./components/NumberInput";

import { useState } from "react";

function App() {
  // STATE
  const [display, setDisplay] = useState("")
  // FUNCTIONS
  const createDigits = () => {
    const digits = [];
    for (let i = 0; i <= 9; i++) {
      digits.push(<NumberInput digit={i} display={display} setDisplay={setDisplay} />)
    }
    return digits
  }

  const clear = () => {
    setDisplay('')
  }

  const backspace = () => {
    setDisplay(prev => prev.slice(0, prev.length - 1))
  }

  const handleClick = (e) => {
    setDisplay(prev => prev + e.target.value)
  }

  const handleEquals = () => {
    const trimmedEval = display.split(" ").join('');
    setDisplay(String(eval(trimmedEval)))

  }
  return (
    <div className="App">
      <h1 className="App__h1">Simple javascript calculator</h1>
      <div className="display">
        {display}
      </div>
      <div className="input-container">
        {createDigits()}
        <button className="button" onClick={clear}>CE</button>
        <button className="button" onClick={backspace}>&#x2190;</button>
        <button className="button" onClick={handleClick} value={" + "}>+</button>
        <button className="button" onClick={handleClick} value={" - "}>-</button>
        <button className="button" onClick={handleClick} value={" * "}>*</button>
        <button className="button" onClick={handleClick} value={" / "}>/</button>
        <button className="equals-button button" onClick={handleEquals}> = </button>
      </div>
    </div>
  );
}

export default App;
