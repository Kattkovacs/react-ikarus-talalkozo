import languageReducer from "./language";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  language: languageReducer,
});

export default allReducers;