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
  return (
    <>
      <div className="calculator">
        <div className="display text-white">
          <div className="operation-display">0</div>
          <div className="main-display">0</div>
        </div>
        <div className="buttons">
          {BUTTONS.map((button) => (
            <button key={button} className={button === "0" ? "zero" : ""}>
              {button}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
