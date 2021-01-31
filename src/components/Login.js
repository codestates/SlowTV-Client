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
import welcome from "../img/welcome.png";
import welcomeBack from "../img/welcome-back.png";

const Login = ({
  isClickedSignInBtn,
  changeSignIn,
  changeSignUp,
  clickSignIn,
  changeNickName,
  changeEmail,
  history,
  clickGetStarted,
}) => {
  const GITHUB_LOGIN_URL =
    "https://github.com/login/oauth/authorize?client_id=1193d67b72770285bd45";
  const githubLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL);
  };

  const GOOGLE_LOGIN_URL =
    "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&response_type=code&redirect_uri=https://localhost:3000/contents&client_id=242040920697-frojb1pu8dc0gcpvcll2kdh0h152br8c.apps.googleusercontent.com";
  const googleLoginHandler = () => {
    window.location.assign(GOOGLE_LOGIN_URL);
  };

  const [refresh, setRefresh] = useState("");
  const [emailInputValue, setEmailInputValue] = useState(null);
  const [passwordInputValue, setPasswordInputValue] = useState(null);
  const [usernameInputValue, setUsernameInputValue] = useState(null);

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

  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

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

  const handleGetUserInfo = async () => {
    const userInfo = await axios("https://server.slowtv24.com/userinfo", {
      withCredentials: true,
    });
    sessionStorage.setItem("email", userInfo.data.userInfo.email);
    sessionStorage.setItem("name", userInfo.data.userInfo.nickname);
    changeEmail(userInfo.data.userInfo.email);
    changeNickName(userInfo.data.userInfo.nickname);
    clickGetStarted();
    history.push("/contents");
  };

  const clickSignInBtn = async () => {
    try {
      if (
        emailErrorMessage === null &&
        passwordErrorMessage === null &&
        emailInputValue !== null
      ) {
        const signIn = await axios.post(
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
    } catch (error) {
      console.log("ererer");
      setErrorMessage("Please check your ID or password");
    }
  };

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
    handleChangeSignInBtn();
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="login_page">
      <LandingNavConatiner />
      {isClickedSignInBtn ? (
        <div className="login_box">
          <div className="login_box_left_welcome_card">
            <div className="login_box_left_welcome_card_phrase">
              Welcome Back!
            </div>

            <div className="login_box_left_welcome_card_img_box">
              <img
                className="login_box_left_welcome_card_img"
                src={welcome}
                alt="Welcome back img"
              ></img>
            </div>

            <div className="login_box_left_welcome_card_register_div">
              <button
                className="login_box_left_welcome_card_register_btn"
                onClick={handleChangeSignUpBtn}
              >
                Register
              </button>
            </div>
          </div>

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

            <div className="login_box_right_login_form_email_box_title_div">
              <div className="login_box_right_login_form_email_box_title">
                Email
              </div>

              <div
                className={
                  emailErrorMessage
                    ? "login_box_right_login_form_email_box_error"
                    : "login_box_right_login_form_email_box"
                }
              >
                <img
                  className="login_box_right_login_form_email_box_input_icon"
                  src={emailIcon}
                  alt="emailIcon"
                ></img>

                <input
                  className="login_box_right_login_form_email_box_input"
                  type="email"
                  autoComplete="on"
                  onChange={handleInputValue("email")}
                  autoFocus="ture"
                  placeholder="email"
                ></input>
              </div>
            </div>

            <div
              className={
                emailErrorMessage
                  ? "login_box_right_login_form_email_box_error_message"
                  : "login_box_right_login_form_email_box_error_message_hidden"
              }
            >
              Invalid email format
            </div>

            <div className="login_box_right_login_form_password_box_title_div">
              <div className="login_box_right_login_form_password_box_title">
                password
              </div>

              <div
                className={
                  passwordErrorMessage
                    ? "login_box_right_login_form_password_box_error"
                    : "login_box_right_login_form_password_box"
                }
              >
                <img
                  className="login_box_right_login_form_password_box_input_icon"
                  src={passwordIcon}
                  alt="passwordIcon"
                ></img>

                <input
                  className="login_box_right_login_form_password_box_input"
                  type="password"
                  onChange={handleInputValue("password")}
                  placeholder="password"
                ></input>
              </div>
            </div>

            <div
              className={
                passwordErrorMessage
                  ? "login_box_right_login_form_password_box_error_message"
                  : "login_box_right_login_form_password_box_error_message_hidden"
              }
            >
              You must enter between 8 and 15 character
            </div>

            <div
              className={
                errorMessage
                  ? "login_box_right_login_form__box_error_message"
                  : "login_box_right_login_form__box_error_message_hidden"
              }
            >
              {errorMessage}
            </div>

            <div className="login_box_right_login_form_sign_in_box">
              <button
                className="login_box_right_login_form_sign_in_box_btn2"
                onClick={clickSignInBtn}
              >
                Sign in
              </button>
            </div>

            <div className="login_box_right_login_form_OAuth_box">
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

            <div className="login_box_right_login_form_email_box_title_div">
              <div className="login_box_right_login_form_email_box_title">
                Name
              </div>

              <div className="login_box_right_login_form_email_box">
                <img
                  className="login_box_right_login_form_email_box_input_icon"
                  src={user}
                  alt="user"
                ></img>

                <input
                  className="login_box_right_login_form_email_box_input"
                  type="text"
                  autoComplete="on"
                  onChange={handleInputValue("username")}
                  autoFocus="on"
                  placeholder="name"
                ></input>
              </div>
            </div>

            <div className="login_box_right_login_form_email_box_title_div">
              <div className="login_box_right_login_form_email_box_title">
                Email
              </div>

              <div
                className={
                  emailErrorMessage
                    ? "login_box_right_login_form_email_box_error"
                    : "login_box_right_login_form_email_box"
                }
              >
                <img
                  className="login_box_right_login_form_email_box_input_icon"
                  src={emailIcon}
                  alt="emailIcon"
                ></img>

                <input
                  className="login_box_right_login_form_email_box_input"
                  type="email"
                  autoComplete="on"
                  onChange={handleInputValue("email")}
                  placeholder="email"
                ></input>
              </div>
            </div>

            <div
              className={
                emailErrorMessage
                  ? "login_box_right_login_form_email_box_error_message"
                  : "login_box_right_login_form_email_box_error_message_hidden"
              }
            >
              Invalid email format
            </div>

            <div className="login_box_right_login_form_password_box_title_div">
              <div className="login_box_right_login_form_password_box_title">
                Password
              </div>

              <div
                className={
                  passwordErrorMessage
                    ? "login_box_right_login_form_password_box_error"
                    : "login_box_right_login_form_password_box"
                }
              >
                <img
                  className="login_box_right_login_form_password_box_input_icon"
                  src={passwordIcon}
                  alt="passwordIcon"
                ></img>

                <input
                  className="login_box_right_login_form_password_box_input"
                  type="password"
                  onChange={handleInputValue("password")}
                  placeholder="password"
                ></input>
              </div>
            </div>

            <div
              className={
                passwordErrorMessage
                  ? "login_box_right_login_form_password_box_error_message"
                  : "login_box_right_login_form_password_box_error_message_hidden"
              }
            >
              You must enter between 8 and 15 character
            </div>

            <div className="login_box_right_login_form_sign_in_box">
              <button
                className="login_box_right_login_form_sign_in_box_btn2"
                onClick={clickSignUp}
              >
                Register
              </button>
            </div>
          </div>
          <div className="sign_in_box_left_welcome_card">
            <div className="sign_in_box_left_welcome_card_phrase">Welcome!</div>

            <div className="sign_in_box_left_welcome_card_box">
              <img
                className="sign_in_box_left_welcome_card_img"
                src={welcomeBack}
                alt="Welcome back img"
              ></img>
            </div>

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
