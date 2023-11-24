import { createContext, useReducer } from "react";
import { initialState, makeCalcul } from "../component/challengeFive/reducerStore";
import FormText from "../component/challengeFive/formText";
import HistoryText from "../component/challengeFive/historyText";

import "../assets/styles/challengeFive.scss";

export const TextContext = createContext();

function Challengefive() {

  const [state, dispatch] = useReducer(makeCalcul, initialState);


  return (
    <div className="challengefive">
      <h2>Challenge 5</h2>
      <TextContext.Provider value={{ state, dispatch }}>
        <FormText />

        <div className="history-text-cont">
          {state.texts.map((text, index) => {
            text.id = index;
            return <HistoryText key={index} text={text} />;
       
          })}
        </div>
      </TextContext.Provider>
    </div>
  );
}

export default Challengefive;
