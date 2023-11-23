const makeOperation = (state, action) => {
    if (!(state.displayText == "")) {
      switch (state.tempOperator) {
        case "+":
          return {
            ...state,
            result: parseFloat(state.result) + parseFloat(state.displayText),
            displayText: "",
            tempOperator: action.operator,
          };
  
        case "-":
          return {
            ...state,
            result: parseFloat(state.result) - parseFloat(state.displayText),
            displayText: "",
            tempOperator: action.operator,
          };
  
        case "x":
          return {
            ...state,
            result: parseFloat(state.result) * parseFloat(state.displayText),
            displayText: "",
            tempOperator: action.operator,
          };
  
        case undefined:
          return {
            ...state,
            result: state.displayText,
            displayText: "",
            tempOperator: action.operator,
          };
  
        default:
          return state;
      }
    } else {
      return {
        ...state,
        tempOperator: action.operator,
      };
    }
  };
  function calculateValue(state, action) {
    let tempstate = { ...state };
  
    console.log("Starts");
    console.log(tempstate);
    console.log(action);
  
    switch (action.type) {
      case "set_text":
        tempstate = {
          ...tempstate,
          displayText: tempstate.displayText + action.number.toString(),
        };
        break;
      case "reset":
        tempstate = {
          displayText: "",
          tempOperator: undefined,
          result: undefined,
        };
        break;
      case "=":
        tempstate = makeOperation(state, action);
        tempstate = {
          ...tempstate,
          displayText: tempstate.result,
          tempOperator: undefined,
        };
        break;
      case "Operation":
        tempstate = makeOperation(state, action);
        break;
      default:
        break;
    }
  
    console.log("end");
    console.log(tempstate);
    return tempstate;
  }
  

export default calculateValue;