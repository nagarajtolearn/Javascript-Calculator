import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [decimalState, setDecimalState] = useState(false);

  const handleNumber = (event) => {
    const number = event.target.textContent;
    if (display === "0") setDisplay(number);
    else setDisplay(display + number);
  };

  const handleOperator = (event) => {
    if (decimalState) {
      setDecimalState(false);
      const operator = event.target.textContent;
      setDisplay(`${display} ${operator} `);
    } else {
      const operator = event.target.textContent;
      setDisplay(`${display} ${operator} `);
    }
  };

  const handleDecimal = () => {
    if (!decimalState) {
      const decimal = ".";
      setDisplay(`${display}${decimal}`);
      setDecimalState(true);
    }
  };

  const handleEqual = () => {
    setDisplay(eval(display));
    setDecimalState(false);
  };

  const handleClear = () => {
    setDisplay("0");
  };

  return (
    <div className="App">
      <div className="claculator">
        <div id="display" className="row">
          {display}
        </div>
        <div id="clear" className="row clear" onClick={handleClear}>
          AC
        </div>
        <div id="divide" onClick={handleOperator}>
          /
        </div>
        <div id="multiply" onClick={handleOperator}>
          *
        </div>
        <div id="seven" onClick={handleNumber} className="dark_gray">
          7
        </div>
        <div id="eight" onClick={handleNumber} className="dark_gray">
          8
        </div>
        <div id="nine" onClick={handleNumber} className="dark_gray">
          9
        </div>
        <div id="subtract" onClick={handleOperator}>
          -
        </div>
        <div id="four" onClick={handleNumber} className="dark_gray">
          4
        </div>
        <div id="five" onClick={handleNumber} className="dark_gray">
          5
        </div>
        <div id="six" onClick={handleNumber} className="dark_gray">
          6
        </div>
        <div id="add" onClick={handleOperator}>
          +
        </div>
        <div id="one" onClick={handleNumber} className="dark_gray">
          1
        </div>
        <div id="two" onClick={handleNumber} className="dark_gray">
          2
        </div>
        <div id="three" onClick={handleNumber} className="dark_gray">
          3
        </div>
        <div id="equals" onClick={handleEqual} className="equals">
          =
        </div>
        <div id="zero" onClick={handleNumber} className="dark_gray">
          0
        </div>
        <div id="decimal" onClick={handleDecimal}>
          .
        </div>
      </div>
      <div className="author">
        {" "}
        Designed and Coded By <br />
        <a
          href="https://github.com/nagarajtolearn/Javascript-Calculator"
          target="_blank"
        >
          Nagaraj Biradar
        </a>
      </div>
    </div>
  );
}

export default App;
