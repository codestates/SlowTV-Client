import React from "react";
import Landing from "../components/Landing";
import { connect } from "react-redux";
import // clickSignIn, // 로그인 상태 변경
// getGithubAccessToken, //
// getGoogleAccessToken,
// changeEmail,
// changeNickName,
"../modules/login";

const LandingContainer = ({
  isLoggedIn,
  isModalClicked,
  // clickSignIn,
  // githubAccessToken,
  // googleAccessToken,
  // getGithubAccessToken,
  // getGoogleAccessToken,
  // changeEmail,
  // changeNickName,
  // email,
  // nickname,
}) => {
  return (
    <Landing
      isLoggedIn={isLoggedIn}
      isModalClicked={isModalClicked}
      // clickSignIn={clickSignIn}
      // githubAccessToken={githubAccessToken}
      // googleAccessToken={googleAccessToken}
      // getGithubAccessToken={getGithubAccessToken}
      // getGoogleAccessToken={getGoogleAccessToken}
      // changeEmail={changeEmail}
      // changeNickName={changeNickName}
      // email={email}
      // nickname={nickname}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  isModalClicked: state.modal.isModalClicked,
  // githubAccessToken: state.login.githubAccessToken,
  // googleAccessToken: state.login.googleAccessToken,
  // email: state.login.email,
  // nickname: state.login.nickname,
});

const mapDispatchToProps = (dispatch) => ({
  // clickSignIn: () => {
  //   dispatch(clickSignIn());
  // },
  // getGithubAccessToken: (accessToken) => {
  //   dispatch(getGithubAccessToken(accessToken));
  // },
  // getGoogleAccessToken: (accessToken) => {
  //   dispatch(getGoogleAccessToken(accessToken));
  // },
  // changeEmail: (email) => {
  //   dispatch(changeEmail(email));
  // },
  // changeNickName: (nickname) => {
  //   dispatch(changeNickName(nickname));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
