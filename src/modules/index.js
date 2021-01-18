import { combineReducers } from "redux";
import contents from "./contents";
import profile from "./profile";

const rootReducer = combineReducers({
  contents,
  profile,
});

export default rootReducer;
