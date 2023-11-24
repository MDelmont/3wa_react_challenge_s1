import { useState } from "react";

function Challengesix() {
  const [numberList, setNumberList] = useState([]);
  const [pair, setPair] = useState([]);

  const makePair = () => {
    let tempPair = [];
    for (let i = 0; i < numberList.length; i += 2) {
      if (numberList.slice(i).length === 3) {
        tempPair.push(numberList.slice(i, i + 3));
        break;
      } else {
        tempPair.push(numberList.slice(i, i + 2));
      }
    }
    setPair(tempPair);
  };

  const handleAddNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 30);
    setNumberList([...numberList, randomNumber]);
  };

  return (
    <div className="challengefive">
      <h2>Challenge 6</h2>

      <button className="Add-number" onClick={handleAddNumber}>
        Ajouter un nombre
      </button>
      <h3>List</h3>
      <p>{numberList.toString()}</p>

      <button onClick={makePair}>Créer les pairs</button>
      <h3>pairs</h3>
      <div className="list-pair">
        {pair.map((pair, index) => (
          <p key={index}>{pair.join(",")}</p>
        ))}
      </div>
    </div>
  );
}

export default Challengesix;
