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

// function loadUser() {
//   try{
//     const user = sessionStorage.getItem('user');
//     if (!user) return;

//     store.dispatch()
//   }
// }

// ! login
const email = window.sessionStorage.getItem("email");
const name = window.sessionStorage.getItem("name");

if (email) {
  console.log("email 있어");
  store.dispatch(clickSignIn());
  store.dispatch(changeEmail(email));
  store.dispatch(changeNickName(name));
  console.log("로그인 유지 해?");
} else {
  console.log("email 없어");
  // store.dispatch(clickLogout());
  // store.dispatch(changeEmail(null));
  // store.dispatch(changeNickName(null));
}

// ! videoData
let video = window.sessionStorage.getItem("videoData");
// console.log("🚀 ~ file: index.js ~ line 52 ~ video", video);

if (video) {
  store.dispatch(clickCategory(JSON.parse(video)));
  // store.dispatch(clickCategory((video)));
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
