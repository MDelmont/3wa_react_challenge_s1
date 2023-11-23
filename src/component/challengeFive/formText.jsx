import { fontColorList, fontSizeList } from "../../data/challengeFive/data";
import { useState, useContext } from "react";
import { TextContext } from "../../pages/challengeFive";

function FormText() {
  const { dispatch } = useContext(TextContext);
  const [text, setText] = useState("");
  const [color, setColor] = useState(fontColorList[0]);
  const [fontSize, setFontSize] = useState(fontSizeList[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TEXT",
      text: {
        content: text,
        style: { color, fontSize: `${fontSize}px` },
      },
    });
  };
  return (
    <form onSubmit={handleSubmit} className="form-select-text">
      <label htmlFor="">Saisir le texte</label>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <label htmlFor="">Selectionnez une couleur</label>

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {fontColorList.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <label htmlFor="">Taille du texte</label>
      <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
        {fontSizeList.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <button id='valid'type="submit">Valider</button>
    </form>
  );
}

export default FormText;
