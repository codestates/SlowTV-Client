import { combineReducers } from "redux";
import contents from "./contents";
import profile from "./profile";
import login from "./login";

const rootReducer = combineReducers({
  contents,
  profile,
  login,
});

export default rootReducer;
