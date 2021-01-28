import { combineReducers } from "redux";
import contents from "./contents";
import landingNav from "./landingNav";
import login from "./login";
import modal from "./modal";
import sideRemoteControl from "./sideRemoteControl";
import videoList from "./videoList";

const rootReducer = combineReducers({
  contents,
  landingNav,
  login,
  modal,
  sideRemoteControl,
  videoList,
});

export default rootReducer;
