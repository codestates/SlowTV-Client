import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import {
  clickSignIn,
  clickLogout,
  changeEmail,
  changeNickName,
} from "./modules/login";
import { clickCategory } from "./modules/sideRemoteControl";

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

const email = window.sessionStorage.getItem("email");
const name = window.sessionStorage.getItem("name");

if (email) {
  store.dispatch(clickSignIn());
  store.dispatch(changeEmail(email));
  store.dispatch(changeNickName(name));
}

let video = window.sessionStorage.getItem("videoData");

if (video) {
  store.dispatch(clickCategory(JSON.parse(video)));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
