const initialState = {
  texts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TEXT":
      return {
        ...state,
        texts: [...state.texts, action.text],
      };
    case "DELETE_TEXT":
      return {
        ...state,
        texts: state.texts.filter((text, index) => index !== action.text?.id),
      };
    default:
      return state;
  }
};

export { initialState, reducer };
