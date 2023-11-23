import Counter from "../component/counter";
import { useState } from "react";
function ChallengeOne() {
  const [reset, setreset] = useState(false);

  const handleReset = () => {
    setreset((prevReset) => !prevReset);
    
  };

  return (
    <div className="challengeOne">
      <h2>Challenge 1</h2>
      <button onClick={handleReset}>reset</button>

      <Counter
        step={1}
        maxValue={20}
        reset={reset}
        binary={true}
        cyclic={false}
      />
      <Counter step={2} maxValue={30} reset={reset} cyclic={true} />
      <Counter
        step={50}
        maxValue={1000}
        reset={reset}
        cyclic={true}
        binary={true}
      />
    </div>
  );
}

export default ChallengeOne;
