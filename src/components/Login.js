import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import LandingNavConatiner from "../containers/LandingNavContainers";
import "./Login.css";
import axios from "axios";
import google from "../img/google.png";
import github from "../img/github.png";
import emailIcon from "../img/email-icon.png";
import passwordIcon from "../img/lock.png";
import cancel from "../img/cancel.png";
import user from "../img/user.png";

const Login = ({
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
  email,
  nickname,
  history,
}) => {
  // ! GitHub OAuth URL // ! client id 변수 처리 하기
  const GITHUB_LOGIN_URL =
    "https://github.com/login/oauth/authorize?client_id=1193d67b72770285bd45";
  const githubLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL);
  };
  // ! Google OAuth URL // scope는 스페이스로 구분
  const GOOGLE_LOGIN_URL =
    "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&response_type=code&redirect_uri=https://localhost:3000/login&client_id=242040920697-frojb1pu8dc0gcpvcll2kdh0h152br8c.apps.googleusercontent.com";
  const googleLoginHandler = () => {
    window.location.assign(GOOGLE_LOGIN_URL);
  };

  // ! 1. GET Authorization Cdoe
  useEffect(() => {
    const url = new URL(window.location.href); // 현재 페이지의 href (URL) 반환, 현재 주소에 ?code=[authorization code] 있음
    const authorizationCode = url.searchParams.get("code"); // 주소의 쿼리스트링에 있는 값을 가져오기 위해 사용
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, []);

  // ! 2. GET Github, Google Access Token
  const getAccessToken = async (authorizationCode) => {
    // ! Github 길이 20, 리팩토링 필요함
    if (authorizationCode.length === 20) {
      const accessToken = await axios.post(
        // "https://server.slowtv24.com/callbackgit",
        "https://server.slowtv24.com/callback-git",
        {
          authorizationCode,
        },
        {
          withCredentials: true,
        }
      );
      if (accessToken) {
        clickSignIn();
        getGithubAccessToken(accessToken.data.accessToken);
      }
    }
    // ! Google 길이 20 넘음
    else {
      const accessToken = await axios.post(
        // "https://server.slowtv24.com/callbackgoogle",
        "https://server.slowtv24.com/callback-google",
        {
          authorizationCode,
        },
        {
          withCredentials: true,
        }
      );
      if (accessToken) {
        clickSignIn();
        getGoogleAccessToken(accessToken.data.accessToken);
      }
    }
  };

  // ! 3. 엑세스 토큰으로 정보 받아오기

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    // ! Github
    if (githubAccessToken !== null) {
      const githubUserInfo = await axios("https://api.github.com/user", {
        headers: {
          authorization: `token ${githubAccessToken}`,
        },
      });
      changeEmail(githubUserInfo.data.login);
      changeNickName(githubUserInfo.data.name);
      //! 로그인 페이지에서 로그인한 경우만 컨텐츠로 보내기, 나머지는 현재 페이지에 남아있게 하기
      // history.push("/contents");
    } else if (googleAccessToken !== null) {
      // ! Google
      const googleUserInfo = await axios(
        "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
        {
          headers: {
            Authorization: `Bearer ${googleAccessToken}`,
          },
        }
      );
      changeEmail(googleUserInfo.data.email);
      changeNickName(googleUserInfo.data.name);
      //! 로그인 페이지에서 로그인한 경우만 컨텐츠로 보내기, 나머지는 현재 페이지에 남아있게 하기
    }
  }, [githubAccessToken, googleAccessToken]);

  // ! 4. 소셜도 세션 아이디 얻기 위해 서버로 이메일, 닉네임 전송
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (githubAccessToken || googleAccessToken) {
      const getSession = await axios.post(
        "https://server.slowtv24.com/social-login",
        {
          email,
          nickname,
        },
        {
          withCredentials: true,
        }
      );
      // ! 로그인 페이지에서 로그인한 게 아니면 해당 페이지 유지하도록 리팩토링
      history.push("/contents");
    }
  }, [email, nickname]);

  // 회원가입 버튼 누르고 새로고침 안되서 임시용
  const [refresh, setRefresh] = useState("");

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [usernameInputValue, setUsernameInputValue] = useState("");

  //! 인풋 핸들링
  const handleInputValue = (key) => (e) => {
    if (key === "email") {
      const emailValue = e.target.value.split("@");
      if (emailValue.length !== 2) {
        setEmailErrorMessage("Invalid email format");
      } else {
        setEmailErrorMessage(null);
        setEmailInputValue(e.target.value);
        console.log("emailInputValue값은?", emailInputValue);
      }
    } else if (key === "password") {
      console.log(e.target.value.length);
      if (e.target.value.length < 8) {
        setPasswordErrorMessage("You must enter between 8 and 15 character");
      } else {
        setPasswordErrorMessage(null);
        setPasswordInputValue(e.target.value);
        console.log("passwordInputValue값은?", passwordInputValue);
      }
    } else if (key === "username") {
      setUsernameInputValue(e.target.value);
      console.log("usernameInputValue값은?", usernameInputValue);
    }
  };

  // ! 일반 로그인 유효성 검사
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);

  //! 로그인 - 회원가입 전환 시 에러 메시지 초기화

  const handleChangeSignInBtn = () => {
    setEmailErrorMessage(null);
    setPasswordErrorMessage(null);
    changeSignIn();
  };

  const handleChangeSignUpBtn = () => {
    setEmailErrorMessage(null);
    setPasswordErrorMessage(null);
    changeSignUp();
  };

  // ! 유저 정보 등록

  // !일반 로그인
  const handleGetUserInfo = async () => {
    const userInfo = await axios("https://server.slowtv24.com/userinfo", {
      withCredentials: true,
    });
    changeEmail(userInfo.data.userInfo.email);
    changeNickName(userInfo.data.userInfo.nickname);
    history.push("/contents");
  };

  // ! 로그인 버튼 클릭 -> isLoggedIn : true
  const clickSignInBtn = async () => {
    if (emailErrorMessage === null && passwordErrorMessage === null) {
      const signIn = await axios.post(
        // "https://server.slowtv24.com/login",
        "https://server.slowtv24.com/login",
        {
          email: emailInputValue,
          password: passwordInputValue,
        },
        {
          withCredentials: true,
        }
      );
      if (signIn.data !== undefined) {
        clickSignIn();
        handleGetUserInfo();
      }
    }
  };

  // ! 회원가입
  const clickSignUp = async () => {
    const signUp = await axios.post(
      "https://server.slowtv24.com/signup",
      {
        nickname: usernameInputValue,
        email: emailInputValue,
        password: passwordInputValue,
      },
      {
        withCredentials: true,
      }
    );
    console.log(
      "🚀 ~ file: Login.js ~ line 214 ~ clickSignUp ~ signUp",
      signUp
    );
    // setRefresh("registered");
    // history.push("/login");
    handleChangeSignInBtn();
    // changeSignIn();
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="login_page">
      <LandingNavConatiner />
      {isClickedSignInBtn ? (
        <div className="login_box">
          {/* //! 로그인 할 때 - welcome back 왼쪽 *************************/}
          <div className="login_box_left_welcome_card">
            {/* //! Welcome Back! */}
            <div className="login_box_left_welcome_card_phrase">
              Welcome Back!
            </div>
            {/* //! 이미지 */}
            <div className="login_box_left_welcome_card_img_box">
              <img
                className="login_box_left_welcome_card_img"
                src={github}
                alt="Welcome back img"
              ></img>
            </div>
            {/* //! 회원가입 이동 버튼 */}
            <div className="login_box_left_welcome_card_register_div">
              <button
                className="login_box_left_welcome_card_register_btn"
                // onClick={changeSignUp}
                onClick={handleChangeSignUpBtn}
              >
                Register
              </button>
            </div>
          </div>
          {/* //! 로그인할 때 - login form 오른쪽 ************************/}
          <div className="login_box_right_login_form">
            <div
              className="login_box_right_login_form_cancel_box"
              onClick={handleGoBack}
            >
              <img
                className="login_box_right_login_form_cancel_img"
                src={cancel}
                alt="cancel"
              ></img>
            </div>
            <div className="login_box_right_login_form_title">Login</div>
            {/* //! email */}
            <div className="login_box_right_login_form_email_box_title_div">
              <div className="login_box_right_login_form_email_box_title">
                Email
              </div>
              {/* //! email icon */}
              <div
                className={
                  emailErrorMessage
                    ? "login_box_right_login_form_email_box_error"
                    : "login_box_right_login_form_email_box"
                }
              >
                {/* inline */}
                {/* <div className="login_box_right_login_form_email_box_input_icon_box"> */}
                <img
                  className="login_box_right_login_form_email_box_input_icon"
                  src={emailIcon}
                  alt="emailIcon"
                ></img>
                {/* </div> */}
                {/* inline */}
                <input
                  className="login_box_right_login_form_email_box_input"
                  type="email"
                  autoComplete="on"
                  onChange={handleInputValue("email")}
                  autoFocus="ture"
                ></input>
              </div>
            </div>
            {/* // ! email error message */}
            <div
              className={
                emailErrorMessage
                  ? "login_box_right_login_form_email_box_error_message"
                  : "login_box_right_login_form_email_box_error_message_hidden"
              }
            >
              Invalid email format
            </div>
            {/* //! PW ***********************************************/}
            <div className="login_box_right_login_form_password_box_title_div">
              <div className="login_box_right_login_form_password_box_title">
                password
              </div>
              {/* //! password icon */}
              <div
                className={
                  passwordErrorMessage
                    ? "login_box_right_login_form_password_box_error"
                    : "login_box_right_login_form_password_box"
                }
              >
                {/* inline */}
                {/* <div className="login_box_right_login_form_password_box_input_icon_box"> */}
                <img
                  className="login_box_right_login_form_password_box_input_icon"
                  src={passwordIcon}
                  alt="passwordIcon"
                ></img>
                {/* </div> */}
                {/* inline */}
                <input
                  className="login_box_right_login_form_password_box_input"
                  type="password"
                  onChange={handleInputValue("password")}
                ></input>
              </div>
            </div>
            {/* // ! password error message */}
            <div
              className={
                passwordErrorMessage
                  ? "login_box_right_login_form_password_box_error_message"
                  : "login_box_right_login_form_password_box_error_message_hidden"
              }
            >
              You must enter between 8 and 15 character
            </div>
            {/* //! Sign in */}
            <div className="login_box_right_login_form_sign_in_box">
              <button
                className="login_box_right_login_form_sign_in_box_btn"
                onClick={clickSignInBtn}
              >
                Sign in
              </button>
            </div>
            {/* //! OAuth */}
            <div className="login_box_right_login_form_OAuth_box">
              {/* // ?Google */}
              <div
                className="login_box_right_login_form_OAuth_box_google_btn"
                onClick={googleLoginHandler}
              >
                <img
                  className="login_box_right_login_form_OAuth_box_google_img"
                  src={google}
                  alt="google"
                ></img>
              </div>
              {/* //? Github */}
              <div
                className="login_box_right_login_form_OAuth_box_github_btn"
                onClick={githubLoginHandler}
              >
                <img
                  className="login_box_right_login_form_OAuth_box_github_img"
                  src={github}
                  alt="github"
                ></img>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="sign_in_box">
          {/* // ! register form 오른쪽 **************************************/}
          <div className="sign_in_box_right_register_form">
            <div
              className="login_box_right_login_form_cancel_box"
              onClick={handleGoBack}
            >
              <img
                className="login_box_right_login_form_cancel_img"
                src={cancel}
                alt="cancel"
              ></img>
            </div>
            <div className="sign_box_right_register_form_title">Register</div>
            {/* //! Username */}
            <div className="login_box_right_login_form_email_box_title_div">
              <div className="login_box_right_login_form_email_box_title">
                Username
              </div>
              {/* //! email icon */}
              <div className="login_box_right_login_form_email_box">
                {/* inline */}
                {/* <div className="login_box_right_login_form_email_box_input_icon_box"> */}
                <img
                  className="login_box_right_login_form_email_box_input_icon"
                  src={user}
                  alt="user"
                ></img>
                {/* </div> */}
                {/* inline */}
                <input
                  className="login_box_right_login_form_email_box_input"
                  type="email"
                  autoComplete="on"
                  onChange={handleInputValue("username")}
                  autoFocus="ture"
                ></input>
              </div>
            </div>
            {/* //! email */}
            <div className="login_box_right_login_form_email_box_title_div">
              <div className="login_box_right_login_form_email_box_title">
                Email
              </div>
              {/* //! email icon */}
              <div
                className={
                  emailErrorMessage
                    ? "login_box_right_login_form_email_box_error"
                    : "login_box_right_login_form_email_box"
                }
              >
                {/* inline */}
                {/* <div className="login_box_right_login_form_email_box_input_icon_box"> */}
                <img
                  className="login_box_right_login_form_email_box_input_icon"
                  src={emailIcon}
                  alt="emailIcon"
                ></img>
                {/* </div> */}
                {/* inline */}
                <input
                  className="login_box_right_login_form_email_box_input"
                  type="email"
                  autoComplete="on"
                  onChange={handleInputValue("email")}
                  autoFocus="ture"
                ></input>
              </div>
            </div>
            {/* // ! email error message */}
            <div
              className={
                emailErrorMessage
                  ? "login_box_right_login_form_email_box_error_message"
                  : "login_box_right_login_form_email_box_error_message_hidden"
              }
            >
              Invalid email format
            </div>
            {/* //! PW ***********************************************/}
            <div className="login_box_right_login_form_password_box_title_div">
              <div className="login_box_right_login_form_password_box_title">
                password
              </div>
              {/* //! password icon */}
              <div
                className={
                  passwordErrorMessage
                    ? "login_box_right_login_form_password_box_error"
                    : "login_box_right_login_form_password_box"
                }
              >
                {/* inline */}
                {/* <div className="login_box_right_login_form_password_box_input_icon_box"> */}
                <img
                  className="login_box_right_login_form_password_box_input_icon"
                  src={passwordIcon}
                  alt="passwordIcon"
                ></img>
                {/* </div> */}
                {/* inline */}
                <input
                  className="login_box_right_login_form_password_box_input"
                  type="password"
                  onChange={handleInputValue("password")}
                ></input>
              </div>
            </div>
            {/* // ! password error message */}
            <div
              className={
                passwordErrorMessage
                  ? "login_box_right_login_form_password_box_error_message"
                  : "login_box_right_login_form_password_box_error_message_hidden"
              }
            >
              You must enter between 8 and 15 character
            </div>

            {/* //! Register */}
            <div className="login_box_right_login_form_sign_in_box">
              <button
                className="login_box_right_login_form_sign_in_box_btn"
                onClick={clickSignUp}
              >
                Register
              </button>
            </div>

            {/* //! welcome card 왼쪽 ***************************************/}
          </div>
          <div className="sign_in_box_left_welcome_card">
            {/* //? Welcome! */}
            <div className="sign_in_box_left_welcome_card_phrase">Welcome!</div>
            {/* //? 이미지 */}
            <div className="sign_in_box_left_welcome_card_box">
              <img
                className="sign_in_box_left_welcome_card_img"
                src={google}
                alt="Welcome back img"
              ></img>
            </div>
            {/* //? 로그인으로 이동 버튼 */}
            <div className="sign_in_box_left_welcome_card_login_div">
              <button
                className="sign_in_box_left_welcome_card_login_btn"
                onClick={handleChangeSignInBtn}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Login);
