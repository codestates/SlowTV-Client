import React, { useCallback } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Login from "../components/Login";
import {
  changeSignIn,
  changeSignUp,
  clickSignIn,
  getGithubAccessToken,
  getGoogleAccessToken,
  changeNickName,
  changeEmail,
} from "../modules/login";
import { clickGetStarted } from "../modules/sideRemoteControl";

const LoginContainers = ({
  isClickedSignInBtn,
  changeSignIn,
  changeSignUp,
  clickSignIn,
  isLoggedIn,
  githubAccessToken,
  googleAccessToken,
  getGithubAccessToken,
  getGoogleAccessToken,
  changeNickName,
  changeEmail,
  email,
  nickname,
  clickGetStarted,
}) => {
  return (
    <Login
      isClickedSignInBtn={isClickedSignInBtn}
      changeSignIn={changeSignIn}
      changeSignUp={changeSignUp}
      clickSignIn={clickSignIn}
      isLoggedIn={isLoggedIn}
      githubAccessToken={githubAccessToken}
      googleAccessToken={googleAccessToken}
      getGithubAccessToken={getGithubAccessToken}
      getGoogleAccessToken={getGoogleAccessToken}
      changeNickName={changeNickName}
      changeEmail={changeEmail}
      email={email}
      nickname={nickname}
      clickGetStarted={clickGetStarted}
    />
  );
};
const mapStateToProps = (state) => ({
  isClickedSignInBtn: state.login.isClickedSignInBtn,
  isLoggedIn: state.login.isLoggedIn,
  githubAccessToken: state.login.githubAccessToken,
  googleAccessToken: state.login.googleAccessToken,
  email: state.login.email,
  nickname: state.login.nickname,
});

const mapDispatchToProps = (dispatch) => ({
  changeSignIn: () => {
    dispatch(changeSignIn());
  },
  changeSignUp: () => {
    dispatch(changeSignUp());
  },
  clickSignIn: () => {
    dispatch(clickSignIn());
  },
  getGithubAccessToken: (accessToken) => {
    dispatch(getGithubAccessToken(accessToken));
  },
  getGoogleAccessToken: (accessToken) => {
    dispatch(getGoogleAccessToken(accessToken));
  },
  changeEmail: (email) => {
    dispatch(changeEmail(email));
  },
  changeNickName: (nickname) => {
    dispatch(changeNickName(nickname));
  },
  clickGetStarted: () => {
    dispatch(clickGetStarted());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainers);
