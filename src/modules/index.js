import { combineReducers } from "redux";
import fakeside from "./fakeside";
import hamburger from "./hamburger";
import landingNav from "./landingNav";
import login from "./login";
import modal from "./modal";
import water from "./water";

const rootReducer = combineReducers({
  fakeside,
  hamburger,
  landingNav,
  login,
  modal,
  water,
});

export default rootReducer;
