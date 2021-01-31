import React from "react";
import Profile from "../components/contents/Profile";
import { connect } from "react-redux";
import {
  clickLogout,
  clickSignIn,
  changeSignUp,
  changeNickName,
  changeEmail,
  getGithubAccessToken,
  getGoogleAccessToken,
} from "../modules/login";

const ProfileContainer = ({
  email,
  nickname,
  isModalClicked,
  isLoggedIn,
  clickLogout,
  githubAccessToken,
  googleAccessToken,
  clickSignIn,
  changeNickName,
  changeEmail,
  changeSignUp,
  getGithubAccessToken,
  getGoogleAccessToken,
}) => {
  return (
    <Profile
      email={email}
      nickname={nickname}
      isModalClicked={isModalClicked}
      isLoggedIn={isLoggedIn}
      clickLogout={clickLogout}
      githubAccessToken={githubAccessToken}
      googleAccessToken={googleAccessToken}
      clickSignIn={clickSignIn}
      changeNickName={changeNickName}
      changeEmail={changeEmail}
      changeSignUp={changeSignUp}
      getGithubAccessToken={getGithubAccessToken}
      getGoogleAccessToken={getGoogleAccessToken}
    />
  );
};

const mapStateToProps = (state) => ({
  email: state.login.email,
  nickname: state.login.nickname,
  isModalClicked: state.modal.isModalClicked,
  isLoggedIn: state.login.isLoggedIn,
  githubAccessToken: state.login.githubAccessToken,
  googleAccessToken: state.login.googleAccessToken,
});

const mapDispatchToProps = (dispatch) => ({
  clickLogout: () => {
    dispatch(clickLogout());
  },
  clickSignIn: () => {
    dispatch(clickSignIn());
  },
  changeEmail: (email) => {
    dispatch(changeEmail(email));
  },
  changeNickName: (nickname) => {
    dispatch(changeNickName(nickname));
  },
  changeSignUp: () => {
    dispatch(changeSignUp());
  },
  getGithubAccessToken: (accessToken) => {
    dispatch(getGithubAccessToken(accessToken));
  },
  getGoogleAccessToken: (accessToken) => {
    dispatch(getGoogleAccessToken(accessToken));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
