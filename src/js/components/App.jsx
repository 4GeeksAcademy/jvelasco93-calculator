import { useState } from "react";

const CALCULATOR_BUTTONS = Object.freeze({
  CLEAR: "C",
  DECIMAL: ".",
  EQUALS: "=",
  PERCENTAGE: "%",
  TOGGLE_SIGN: "±",
});

const OPERATOR = Object.freeze({
  SUM: "+",
  SUBTRACT: "-",
  MULTIPLY: "×",
  DIVIDE: "÷",
});

const BUTTONS = [
  // FIRST ROW
  CALCULATOR_BUTTONS.CLEAR,
  CALCULATOR_BUTTONS.TOGGLE_SIGN,
  CALCULATOR_BUTTONS.PERCENTAGE,
  OPERATOR.DIVIDE,

  // SECOND ROW
  "7",
  "8",
  "9",
  OPERATOR.MULTIPLY,

  // THIRD ROW
  "4",
  "5",
  "6",
  OPERATOR.SUBTRACT,

  // FOURTH ROW
  "1",
  "2",
  "3",
  OPERATOR.SUM,

  // LAST ROW
  "0",
  CALCULATOR_BUTTONS.DECIMAL,
  CALCULATOR_BUTTONS.EQUALS,
];

export default function App() {
  const [display, setDisplay] = useState("0");
  const [operationDisplay, setOperationDisplay] = useState("");

  function handleButtonClick(value) {
    if (value === CALCULATOR_BUTTONS.CLEAR) {
      setDisplay("0");
      setOperationDisplay("");
      return;
    }

    if (value === CALCULATOR_BUTTONS.PERCENTAGE) {
      setDisplay((prevDisplay) => {
        return String(Number(prevDisplay / 100));
      });
      return;
    }

    if (value === CALCULATOR_BUTTONS.TOGGLE_SIGN) {
      if (display === "0") return;
      setDisplay((prevDisplay) => {
        return prevDisplay.startsWith("-")
          ? prevDisplay.slice(1)
          : `-${prevDisplay}`;
      });
      return;
    }

    if (value === CALCULATOR_BUTTONS.DECIMAL) {
      if (display.includes(CALCULATOR_BUTTONS.DECIMAL)) return;
      setDisplay((prevDisplay) => {
        return prevDisplay.concat(CALCULATOR_BUTTONS.DECIMAL);
      });
    }

    if (!isNaN(value)) {
      setDisplay((prevDisplay) => {
        return prevDisplay === "0" ? value : prevDisplay.concat(value);
      });
      return;
    }
  }

  return (
    <div className="calculator">
      <Display operation={operationDisplay} value={display} />
      <ButtonGrid onButtonClick={handleButtonClick} />
    </div>
  );
}

function Display({ operation, value }) {
  return (
    <div className="display">
      <div className="operation-display">{operation}</div>
      <div className="main-display">{value}</div>
    </div>
  );
}

function ButtonGrid({ onButtonClick }) {
  return (
    <div className="buttons">
      {BUTTONS.map((button) => (
        <CalculatorButton
          key={button}
          label={button}
          onButtonClick={onButtonClick}
        />
      ))}
    </div>
  );
}

function CalculatorButton({ label, onButtonClick }) {
  return (
    <button
      type="button"
      className={label === "0" ? "zero" : ""}
      onClick={() => onButtonClick(label)}
    >
      {label}
    </button>
  );
}
