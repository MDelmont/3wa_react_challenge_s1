import {  useReducer } from "react";
import "../../assets/styles/complexeCalculator.scss";
import calculateValue from"./reducerCalcul"



function ComplexeCalculator() {
  const [state, dispatch] = useReducer(calculateValue, {
    displayText: "",
    tempOperator: undefined,
    result: undefined,
  });

  const listNumber = {
    un: 1,
    deux: 2,
    trois: 3,
    quatre: 4,
    cinq: 5,
    six: 6,
    sept: 7,
    huit: 8,
    neuf: 9,
    zero: 0,
  };
  const numberArray = Object.entries(listNumber);
  const listOperator = ["+", "-", "x", "="];

  return (
    <div className="complexe-calculator">
      <div className="input-area">{state.displayText}</div>
      <div className="action">
        <div className="number-area">
          {numberArray.map(([name, number]) => (
             <button
             key={name}
             id={name}
             className="numberButton"
             onClick={() => {
               dispatch({type:'set_text',number:number});
             }}
           >
             {number}
           </button>
          ))}
        </div>

        <div className="operator-area">
          {listOperator.map((operator) => (
            <button
            key={operator}
            className="operationButton"
            onClick={() => {
              dispatch({
                type: operator == "=" ? "=" : "Operation",
                operator: `${operator}`,
              });
            }}
          >
            {operator}
          </button>
          ))}
        </div>
        <button
          className="btn-reset"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          AC
        </button>
      </div>
    </div>
  );
}

export default ComplexeCalculator;
