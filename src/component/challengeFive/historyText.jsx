import { useContext } from "react";
import { TextContext } from "../../pages/challengeFive";

function HistoryText({ text }) {
    
  const handleDelete = (text) => {
    console.log(text);
    dispatch({ type: "DELETE_TEXT", text });
  };

  const { dispatch } = useContext(TextContext);

  return (
    <div className="history-text">
      <p style={text.style}>{text.content}</p>
      <button onClick={() => handleDelete(text)}>Supprimer</button>
    </div>
  );
}
export default HistoryText;
