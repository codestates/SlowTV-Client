import React from "react";
import Contents from "../components/Contents";
import { connect } from "react-redux";
import { goToContentsPage } from "../modules/contents";
import {
  changeSignIn,
  changeSignUp,
  clickSignIn,
  getGithubAccessToken,
  getGoogleAccessToken,
  changeNickName,
  changeEmail,
  // changePassword,
} from "../modules/login";
import { clickGetStarted } from "../modules/sideRemoteControl";

const ContentsContainer = ({
  isModalClicked,
  isContentsPage,
  goToContentsPage,
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
    <Contents
      isModalClicked={isModalClicked}
      isContentsPage={isContentsPage}
      goToContentsPage={goToContentsPage}
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
  isModalClicked: state.modal.isModalClicked,
  isContentsPage: state.contents.isContentsPage,
  isClickedSignInBtn: state.login.isClickedSignInBtn,
  isLoggedIn: state.login.isLoggedIn,
  githubAccessToken: state.login.githubAccessToken,
  googleAccessToken: state.login.googleAccessToken,
  email: state.login.email,
  nickname: state.login.nickname,
});

const mapDispatchToProps = (dispatch) => ({
  goToContentsPage: () => {
    dispatch(goToContentsPage());
  },
  changeSignIn: () => {
    dispatch(changeSignIn());
  },
  changeSignUp: () => {
    dispatch(changeSignUp());
  },
  clickSignIn: () => {
    // console.log("a");
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

export default connect(mapStateToProps, mapDispatchToProps)(ContentsContainer);
