import { useEffect } from "react";
import useCustomCounter from "../hook/useCustomCounter";
/**
 *
 * @param {number} step
 * @param {number} maxValue
 * @param {boolean} reset
 * @param {boolean} binary
 * @param {boolean} cyclic for repeat counter when y going to max value
 * @returns
 */
function Counter({
  reset,
  step = 1,
  maxValue = Infinity,
  binary = false,
  cyclic = true,
}) {
  const { getCount, running, startCounter, stopCounter, resetCounter } =
    useCustomCounter(step, maxValue, binary, cyclic);

  useEffect(() => {
      resetCounter();
  }, [reset]);

  return (
    <div className="counter-cont">
      <button
        onClick={startCounter}
        disabled={running ? true : getCount() < maxValue ? false : true}
      >
        Start (+{step})
      </button>
      <button onClick={stopCounter} disabled={running ? false : true}>
        Stop
      </button>
      <p>{getCount()}</p>
    </div>
  );
}

export default Counter;
