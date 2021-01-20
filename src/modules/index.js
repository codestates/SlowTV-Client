import { combineReducers } from "redux";
import contents from "./contents";
import profile from "./profile";
import hamburger from "./hamburger";
// import thumbnails from "./thumbnails";
import login from "./login";

const rootReducer = combineReducers({
  contents,
  profile,
  hamburger,
  login,
});

export default rootReducer;
