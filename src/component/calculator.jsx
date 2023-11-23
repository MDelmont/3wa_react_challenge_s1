import { useState, useEffect } from "react";

function Calculator() {
  const [firstNumber, setfirstNumber] = useState();
  const [secondNumber, setsecondNumber] = useState();
  const [result, setresult] = useState();
  const [nbCalcule, setnbCalcule] = useState(0);

  const checkisgood = () => {
    if (isNaN(firstNumber) || firstNumber === "") {
      alert("Le premier chiffre doit est un nombre");
      return false;
    }
    if (isNaN(secondNumber) || firstNumber === "") {
      alert("Le seconde chiffre doit est un nombre");
      return false;
    }
    return true;
  };
  const makeAddtion = () => {
    if (checkisgood()) {
      setresult(parseFloat(firstNumber) + parseFloat(secondNumber));
    }
  };
  const makeMultiplication = () => {
    if (checkisgood()) {
      setresult(parseFloat(firstNumber) * parseFloat(secondNumber));
    }
  };

  const resetCalculator = () => {
    setfirstNumber("");
    setsecondNumber("");
    setresult("");
    setnbCalcule(0);
  };

  useEffect(() => {
    setnbCalcule((prevnbcalcule) => prevnbcalcule + 1);
  }, [result]);

  useEffect(() => {
    if (nbCalcule == 10) alert("Vous avez fait 10 opérations");
  }, [nbCalcule]);

  return (
    <div className="calculator">
      <h3>Valeurs</h3>
      <input
        type="number"
        name="firstNumber"
        value={firstNumber}
        onChange={(e) => setfirstNumber(e.target.value)}
      />
      <input
        type="number"
        name="secondNumber"
        value={secondNumber}
        onChange={(e) => setsecondNumber(e.target.value)}
      />

      <h3>Opérations</h3>
      <button onClick={makeAddtion}>+</button>
      <button onClick={makeMultiplication}>x</button>
      <h3>Résultat</h3>
      <p>{result}</p>
      <p>{nbCalcule}</p>
      <button onClick={resetCalculator}>reset</button>
    </div>
  );
}

export default Calculator;
