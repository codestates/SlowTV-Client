// 맵핑 대신 hooks
// connect 함수 대신 사용하여 상태 조회하기, 사용법은 const 결과 = useSelector(상태 선택 함수)
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
  // changePassword,
} from "../modules/login";

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
  // changePassword,
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
      // changePassword={changePassword}
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
  // password: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
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
  // changePassword: (password) => {
  //   dispatch(changePassword(password));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainers);

// 추후 리팩토링
// const LoginContainers = () => {
//   // ! useSelector
//   const isClickedSignIn = useSelector(
//     // 스토어에서 상태 받아옴 -> state.리듀서명.상태에 접근
//     (state) => state.login.initialState.isClickedSignInBtn
//   );
//   // ! useDispatch
//   // const dispatch = useDispatch();
//   // dispatch(Action)
//   const dispatch = useDispatch();
//   const changeSignIn = useCallback(() => dispatch(changeSignIn()), [dispatch]);
//   const changeSignUp = useCallback(() => dispatch(changeSignUp()), [dispatch]);
//   return (
//     <Login
//       isClickedSignIn={isClickedSignIn}
//       changeSignIn={changeSignIn}
//       changeSignUp={changeSignUp}
//     />
//   );
// };
