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
  email,
  nickname,
  history,
}) => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [usernameInputValue, setUsernameInputValue] = useState("");

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
    setRefresh("registered");
  };

  return (
    <div className="login_page">
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
