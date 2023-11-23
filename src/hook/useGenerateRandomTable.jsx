import { useState } from "react";
function useGenerateRandomTable(lenght = 20) {

  const generateUniqueRandomNumbers = (lenght) => {
    const numbers = [];
    while (numbers.length < lenght) {
      const randomNumber = Math.ceil(Math.random() * 500);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };

  const [table] = useState(generateUniqueRandomNumbers(lenght));

  const getSortTable = () => {
    return table.sort((a, b) => a - b);
  };

  return { table, getSortTable };
}

export default useGenerateRandomTable;
