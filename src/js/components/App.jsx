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

const OPERATORS = [
  OPERATOR.SUM,
  OPERATOR.SUBTRACT,
  OPERATOR.MULTIPLY,
  OPERATOR.DIVIDE,
];

const BUTTONS = [
  // FIRST ROW
  CALCULATOR_BUTTONS.CLEAR,
  CALCULATOR_BUTTONS.TOGGLE_SIGN,
  CALCULATOR_BUTTONS.PERCENTAGE,
  OPERATOR.DIVIDE,
  //SECOND ROW
  "7",
  "8",
  "9",
  OPERATOR.MULTIPLY,
  "4",
  "5",
  "6",
  // THIRD ROW
  OPERATOR.SUBTRACT,
  "1",
  "2",
  "3",
  // LAST ROW
  OPERATOR.SUM,
  "0",
  CALCULATOR_BUTTONS.DECIMAL,
  CALCULATOR_BUTTONS.EQUALS,
];

export default function App() {
  const [display, setDisplay] = useState("0");
  const [operationDisplay, setOperationDisplay] = useState("");

  return (
    <div className="calculator">
      <Display operation={operationDisplay} value={display} />
      <ButtonGrid />
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

function ButtonGrid() {
  return (
    <div className="buttons">
      {BUTTONS.map((button) => (
        <CalculatorButton label={button} key={button} />
      ))}
    </div>
  );
}
function CalculatorButton({ label }) {
  return (
    <button key={label} className={label === "0" ? "zero" : ""}>
      {label}
    </button>
  );
}
