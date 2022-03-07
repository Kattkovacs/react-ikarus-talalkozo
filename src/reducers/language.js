const languageReducer = (state = "hu", action) => {
  switch (action.type) {
    case "LANG":
      return action.payload;
    default:
      return state;
  }
};
export default languageReducer;
