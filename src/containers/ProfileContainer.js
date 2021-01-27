import React from "react";
import Profile from "../components/contents/Profile";
import { connect } from "react-redux";
import {
  clickLogout,
  clickSignIn,
  changeSignUp,
  changeNickName,
  changeEmail,
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
    // console.log("a");
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
