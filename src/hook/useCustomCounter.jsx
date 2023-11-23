import { useState, useEffect } from "react";

function useCustomCounter(
  step = 1,
  maxValue = Infinity,
  binary = false,
  cyclic = true,
  isRunning = false
) {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(isRunning);

  const startCounter = () => {
    setRunning(true);
  };

  const stopCounter = () => {
    setRunning(false);
  };

  const resetCounter = () => {
    stopCounter();
    setCount(0);
  };
  const getCount = () => {
    return binary ?  transformBinary(count):count
  }
  const transformBinary = (val) => {
    return val.toString(2);
  };

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + step;
          if (newCount >= maxValue) {
            if (cyclic) {
              return 0;
            } else {
              setRunning(false);
              return  maxValue;
            }
          }
          return  newCount;
        });
      }, 500);
    }

    return () => clearInterval(intervalId);
  }, [running]);

  return { getCount, running, startCounter, stopCounter, resetCounter };
}

export default useCustomCounter;
