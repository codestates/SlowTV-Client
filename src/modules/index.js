import { combineReducers } from "redux";
import contents from "./contents";
import profile from "./profile";
import hamburger from "./hamburger";
// import thumbnails from "./thumbnails";

const rootReducer = combineReducers({
  contents,
  profile,
  hamburger,
});

export default rootReducer;
