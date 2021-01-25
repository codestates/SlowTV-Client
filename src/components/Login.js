import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
// import Nav from "../components/Nav";
// import LandingNav from "../components/LandingNav";
import LandingNavConatiner from "../containers/LandingNavContainers";
import "./Login.css";
import axios from "axios";

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
  history,
}) => {
  // ! GitHub OAuth URL
  const GITHUB_LOGIN_URL =
    // ! client id 변수 처리 하기
    "https://github.com/login/oauth/authorize?client_id=1193d67b72770285bd45";
  const githubLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL);
  };

  // ! Google OAuth URL
  const GOOGLE_LOGIN_URL =
    // "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&response_type=code&redirect_uri=https://www.slowtv24.com&client_id=242040920697-frojb1pu8dc0gcpvcll2kdh0h152br8c.apps.googleusercontent.com";
    // "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&response_type=code&redirect_uri=https://localhost:3000&client_id=242040920697-frojb1pu8dc0gcpvcll2kdh0h152br8c.apps.googleusercontent.com";
    // 내가 만든 거
    // "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&response_type=code&redirect_uri=https://localhost:3000/login&client_id=830064839382-s39vq5s9bja817ha15o64jaod36kurlv.apps.googleusercontent.com";
    // 아이피
    // "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&response_type=code&redirect_uri=https://localhost:3000/login&client_id=242040920697-frojb1pu8dc0gcpvcll2kdh0h152br8c.apps.googleusercontent.com";
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
    console.log(
      "🚀 ~ file: Login.js ~ line 56 ~ getAccessToken ~ authorizationCode",
      authorizationCode.length
    );
    // ? Github 길이 20, 리팩토링 필요함
    if (authorizationCode.length === 20) {
      console.log("돼?");
      console.log(
        "🚀 ~ file: Login.js ~ line 56 ~ getAccessToken ~ authorizationCode",
        authorizationCode
      );
      const accessToken = await axios.post(
        // "https://server.slowtv24.com/callbackgit",
        "https://mayweather24.com/callbackgit",
        {
          authorizationCode,
        },
        {
          withCredentials: true,
        }
      );
      if (accessToken) {
        clickSignIn(); // 로그인 트루
        getGithubAccessToken(accessToken.data.accessToken);
      }
    }
    // ? Google 길이 20 넘음
    else {
      const accessToken = await axios.post(
        // "https://server.slowtv24.com/callbackgoogle",
        "https://mayweather24.com/callbackgoogle",
        {
          authorizationCode,
        },
        {
          withCredentials: true,
        }
      );
      console.log(
        "🚀 ~ file: Login.js ~ line 88 ~ getAccessToken ~ accessToken>>>!!!",
        accessToken
      );
      if (accessToken) {
        clickSignIn(); // 로그인 트루
        getGoogleAccessToken(accessToken.data.accessToken);
      }
    }
  };

  // // ! 1. GET Authorization Cdoe
  // useEffect(() => {
  //   const url = new URL(window.location.href); // 현재 페이지의 href (URL) 반환, 현재 주소에 ?code=[authorization code] 있음
  //   const authorizationCode = url.searchParams.get("code"); // 주소의 쿼리스트링에 있는 값을 가져오기 위해 사용
  //   if (authorizationCode) {
  //     getAccessToken(authorizationCode);
  //   }
  // }, []);

  // ! 3. 엑세스 토큰으로 정보 받아오기

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    // console.log("액세스 토큰으로 정보 받아오기");
    // const userInfo = {};
    // ? Github
    if (githubAccessToken !== null) {
      console.log(
        "🚀 ~ file: Login.js ~ line 115 ~ useEffect ~ githubAccessToken",
        githubAccessToken
      );
      console.log("깃 액세스 토큰으로 정보 받아오기");
      const githubUserInfo = await axios("https://api.github.com/user", {
        headers: {
          authorization: `token ${githubAccessToken}`,
        },
      });
      console.log(
        "🚀 ~ file: Login.js ~ line 127 ~ useEffect ~ githubUserInfo",
        githubUserInfo
      );
      // {email: "username1@google.com", nickname: "username1"} 이런 형태로 정보에 넣어야 함
      // userInfo["email"] = githubUserInfo.data.login;
      // userInfo["nickname"] = githubUserInfo.data.name;
      changeEmail(githubUserInfo.data.login);
      changeNickName(githubUserInfo.data.name);
      history.push("/contents");
    } else if (googleAccessToken !== null) {
      console.log("구글 액세스 토큰으로 정보 받아오기");
      // GET https://www.googleapis.com/drive/v2/files?access_token=access_token
      console.log(
        "🚀 ~ file: Login.js ~ line 116 ~ useEffect ~ googleAccessToken>>>",
        googleAccessToken
      );
      // curl -H "Authorization: Bearer access_token" https://www.googleapis.com/drive/v2/files
      // curl https://www.googleapis.com/drive/v2/files?access_token=access_token
      const googleUserInfo = await axios(
        // `https://www.googleapis.com/drive/v2/files?access_token=${googleAccessToken}`
        // "https://www.googleapis.com//v1/files",
        // "https://www.googleapis.com/oauth2/v1/userinfo?access_token=${this.state.googleAccessToken}"
        // https://www.googleapis.com/oauth2/v1/userinfo?alt=json?access_token=엑세스토큰

        "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
        // "https://www.googleapis.com/auth/userinfo.profile",
        {
          headers: {
            Authorization: `Bearer ${googleAccessToken}`,
          },
        }
      );
      console.log(
        "🚀 ~ file: Login.js ~ line 118 ~ useEffect ~ googleUserInfo",
        googleUserInfo.data
      );
      // userInfo["email"] = googleUserInfo.data.email;
      // userInfo["nickname"] = googleUserInfo.data.name;
      changeEmail(googleUserInfo.data.email);
      changeNickName(googleUserInfo.data.name);
      history.push("/contents");
    }
  }, [githubAccessToken, googleAccessToken]);

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [usernameInputValue, setUsernameInputValue] = useState("");

  // 회원가입 버튼 누르고 새로고침 안되서 임시용
  const [refresh, setRefresh] = useState("");

  const handleInputValue = (key) => (e) => {
    if (key === "email") {
      setEmailInputValue(e.target.value);
      console.log("emailInputValue값은?", emailInputValue);
    } else if (key === "password") {
      setPasswordInputValue(e.target.value);
      console.log("passwordInputValue값은?", passwordInputValue);
    } else if (key === "username") {
      setUsernameInputValue(e.target.value);
      console.log("usernameInputValue값은?", usernameInputValue);
    }
  };

  // ! 유저 정보 등록
  // https://server.slowtv24.com/userinfo
  // https://mayweather24.com/userinfo
  // !일반 로그인
  const handleGetUserInfo = async () => {
    // const userInfo = await axios("https://server.slowtv24.com/userinfo", {
    const userInfo = await axios("https://mayweather24.com/userinfo", {
      withCredentials: true,
    });
    console.log(
      "🚀 ~ file: Login.js ~ line 69 ~ handleGetUserInfo ~ userInfo.data.userInfo>>>>>",
      userInfo.data.userInfo
    ); // {email: "username1@google.com", nickname: "username1"}
    changeEmail(userInfo.data.userInfo.email);
    changeNickName(userInfo.data.userInfo.nickname);
    history.push("/contents");
  };

  // ! 로그인 버튼 클릭 -> isLoggedIn : true
  const clickSignInBtn = async () => {
    console.log("emailInputValue", emailInputValue);
    console.log("passwordInputValue", passwordInputValue);
    const signIn = await axios.post(
      // "https://server.slowtv24.com/login",
      "https://mayweather24.com/login",
      {
        email: emailInputValue,
        password: passwordInputValue,
      },
      {
        withCredentials: true,
      }
    );
    console.log(
      "🚀 ~ file: Login.js ~ line 51 ~ clickSignInBtn ~ signIn",
      signIn
    );
    if (signIn.data !== undefined) {
      clickSignIn();
      handleGetUserInfo();
    }
  };

  // ! 회원가입
  const clickSignUp = async () => {
    console.log("emailInputValue", emailInputValue);
    console.log("passwordInputValue", passwordInputValue);
    console.log("usernameInputValue", usernameInputValue);
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
    console.log("🚀 ~ file: Login.js ~ line 80 ~ clickSignUp ~ signUp", signUp);
    setRefresh("registered");
  };

  return (
    <div className="login_page">
      {/* <Nav /> */}
      <LandingNavConatiner />
      {isClickedSignInBtn ? (
        <div className="login_box">
          {/* welcome back 왼쪽 */}
          <div className="login_box_left_welcome_card">
            {/* //! Welcome Back! */}
            <div className="login_box_left_welcome_card_phrase">
              Welcome Back!
            </div>
            {/* //! 이미지 */}
            <div className="login_box_left_welcome_card_img">
              <img alt="Welcome back img"></img>
            </div>
            {/* //! 회원가입 이동 버튼 */}
            <div className="login_box_left_welcome_card_register_div">
              <button
                className="login_box_left_welcome_card_register_btn"
                onClick={changeSignUp}
              >
                Register
              </button>
            </div>
          </div>
          {/* //! login form 오른쪽 */}
          <div className="login_box_right_login_form">
            <div className="login_box_right_login_form_title">Login</div>
            {/* //! email */}
            <div className="login_box_right_login_form_email_box">
              <div className="login_box_right_login_form_email_box_title">
                Email
              </div>
              <input
                className="login_box_right_login_form_email_box_input"
                onChange={handleInputValue("email")}
              ></input>
            </div>
            {/* //! PW */}
            <div className="login_box_right_login_form_password_box">
              <div className="login_box_right_login_form_password_box_title">
                Password
              </div>
              <input
                className="login_box_right_login_form_password_box_input"
                onChange={handleInputValue("password")}
              ></input>
            </div>
            {/* Sign in */}
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
              <div className="login_box_right_login_form_OAuth_box_google_div">
                <button
                  className="login_box_right_login_form_OAuth_box_google_btn"
                  onClick={googleLoginHandler}
                >
                  Google
                </button>
              </div>
              {/* //? Github */}
              <div className="login_box_right_login_form_OAuth_box_github_div">
                <button
                  className="login_box_right_login_form_OAuth_box_github_btn"
                  onClick={githubLoginHandler}
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="sign_in_box">
          {/* // ! register form 왼쪽 */}
          <div className="sign_in_box_left_register_form">
            <div className="sign_box_left_register_form_title">Register</div>
            {/* Username */}
            <div className="sign_in_box_left_register_form_username_box">
              <div className="sign_in_box_left_register_form_username_box_title">
                Username
              </div>
              <input
                className="sign_in_box_left_register_form_username_box_input"
                onChange={handleInputValue("username")}
              ></input>
            </div>
            {/* email */}
            <div className="sign_in_box_left_register_form_email_box">
              <div className="sign_in_box_left_register_form_email_box_title">
                Email
              </div>
              <input
                className="sign_in_box_left_register_form_email_box_input"
                onChange={handleInputValue("email")}
              ></input>
            </div>
            {/* PW */}
            <div className="sign_in_box_left_register_form_password_box">
              <div className="sign_in_box_left_register_form_password_box_title">
                Password
              </div>
              <input
                className="sign_in_box_left_register_form_password_box_input"
                onChange={handleInputValue("password")}
              ></input>
            </div>
            {/* Register */}
            <div className="sign_in_box_left_register_form_register_box">
              <button
                className="sign_in_box_left_register_form_register_box_btn"
                onClick={clickSignUp}
              >
                Register
              </button>
            </div>
            {/* OAuth */}
            <div className="sign_in_box_left_register_form_OAuth_box">
              <div className="sign_in_box_left_register_form_OAuth_box_google_div">
                <button className="sign_in_box_left_register_form_OAuth_box_google_btn">
                  Google
                </button>
              </div>
              <div className="sign_in_box_left_register_form_OAuth_box_github_div">
                <button className="sign_in_box_left_register_form_OAuth_box_github_btn">
                  GitHub
                </button>
              </div>
            </div>
            {/* welcome card 오른쪽*/}
          </div>
          <div className="sign_in_box_right_welcome_card">
            {/* //? Welcome! */}
            <div className="sign_in_box_right_welcome_card_phrase">
              Welcome!
            </div>
            {/* //? 이미지 */}
            <div className="sign_in_box_right_welcome_card_img">
              <img alt="Welcome back img"></img>
            </div>
            {/* //? 로그인으로 이동 버튼 */}
            <div className="sign_in_box_right_welcome_card_login_div">
              <button
                className="sign_in_box_right_welcome_card_login_btn"
                onClick={changeSignIn}
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
