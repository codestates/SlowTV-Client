import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import cancel from "../../img/cancel.png";
import google from "../../img/google.png";
import github from "../../img/github.png";
import emailIcon from "../../img/email-icon.png";
import passwordIcon from "../../img/lock.png";
import meditation from "../../img/meditation.png";
import "./Modal.css";

const Modal = ({
  closeModal,
  isLoggedIn,
  clickSignIn,
  clickLogout,
  changeEmail,
  changeNickName,
  nickname,
  handleOnClickCategory,
  getGithubAccessToken,
  getGoogleAccessToken,
  changeSignUp,
  history,
}) => {
  const GITHUB_LOGIN_URL =
    "https://github.com/login/oauth/authorize?client_id=1193d67b72770285bd45";
  const githubLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL);
    const url = new URL(window.location.href);
    const isCategory = url.pathname.split("/")[1];
    const nowPage = url.pathname.split("/")[2];
  };

  const GOOGLE_LOGIN_URL =
    "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&response_type=code&redirect_uri=https://localhost:3000/contents&client_id=242040920697-frojb1pu8dc0gcpvcll2kdh0h152br8c.apps.googleusercontent.com";
  const googleLoginHandler = () => {
    window.location.assign(GOOGLE_LOGIN_URL);
  };

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
        setPasswordErrorMessage("You must enter between 8 and 15 characters.");
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

          const url = new URL(window.location.href);
          const isCategory = url.pathname.split("/")[1];
          const nowPage = url.pathname.split("/")[2];

          if (nowPage !== "profile" && nowPage !== "favorites") {
            const video = await axios(
              `https://server.slowtv24.com/category/${nowPage}`,
              {
                withCredentials: true,
              }
            );
            handleOnClickCategory(video.data.contents);
          } else if (nowPage === "favorites") {
            const video = await axios(
              `https://server.slowtv24.com/${nowPage}`,
              {
                withCredentials: true,
              }
            );
            console.log(
              "🚀 ~ file: Modal.js ~ line 91 ~ clickSignInBtn ~ video",
              video
            );
            handleOnClickCategory(video.data.userFavorites);
          }
        }
      }
    } catch (error) {
      setErrorMessage("Please check your ID or password");
    }
  };

  const handleGetUserInfo = async () => {
    const userInfo = await axios("https://server.slowtv24.com/userinfo", {
      withCredentials: true,
    });
    sessionStorage.setItem("email", userInfo.data.userInfo.email);
    sessionStorage.setItem("name", userInfo.data.userInfo.nickname);
    changeEmail(userInfo.data.userInfo.email);
    changeNickName(userInfo.data.userInfo.nickname);
    closeModal();
  };

  const handleGoCategory = async (e) => {
    const url = new URL(window.location.href);
    const nowPage = url.pathname.split("/")[2];

    if (nowPage !== "profile" && nowPage !== "favorites") {
      const video = await axios(
        `https://server.slowtv24.com/category/${nowPage}`,
        {
          withCredentials: true,
        }
      );
      handleOnClickCategory(video.data.contents);
    } else if (nowPage === "favorites") {
      handleOnClickCategory(null);
    }
  };

  const handleLogout = async () => {
    const logout = await axios.post(
      "https://server.slowtv24.com/logout",
      null,
      {
        withCredentials: true,
      }
    );
    clickLogout();
    sessionStorage.clear();
    getGithubAccessToken(null);
    getGoogleAccessToken(null);
    changeEmail(null);
    changeNickName(null);
    handleGoCategory();
  };

  const handleGoSignUpPage = () => {
    changeSignUp();
    history.push("/login");
  };

  return (
    <div className="modal">
      {isLoggedIn ? (
        <div className="modal_is_logged_in">
          <div className="modal_is_logged_in_close_btn_box">
            <button
              className="modal_is_logged_in_close_btn"
              onClick={closeModal}
            >
              <img
                className="modal_is_logged_in_close_btn_img"
                src={cancel}
                alt="cancel"
              ></img>
            </button>
          </div>

          {nickname ? (
            <div className="modal_my_profile_username">Hi, {nickname}</div>
          ) : (
            <div></div>
          )}

          <div className="modal_my_profile_div_user_img">
            <img
              className="modal_my_profile_user_img"
              src={meditation}
              alt="user_img"
            ></img>
          </div>

          <Link
            className="Modal_page_Link"
            to="/contents/profile/update-username"
          >
            <div className="modal_my_profile_change_username_btn">
              Change Name
            </div>
          </Link>

          <Link
            className="Modal_page_Link"
            to="/contents/profile/update-password"
          >
            <div className="modal_my_profile_change_password_btn">
              Change Password
            </div>
          </Link>
          <div className="modal_my_profile_logout_btn" onClick={handleLogout}>
            Logout
          </div>
        </div>
      ) : (
        <div className="modal_is_not_logged_in">
          <div className="modal_is_not_logged_in_close_btn_box">
            <button
              className="modal_is_not_logged_in_close_btn"
              onClick={closeModal}
            >
              <img
                className="modal_is_not_logged_in_close_btn_img"
                src={cancel}
                alt="cancel"
              ></img>
            </button>
          </div>
          <div className="modal_my_profile_greeting">Welcome Slow TV</div>

          <div className="modal_my_profile_box_user_id">
            <div className="modal_my_profile_div_user_id">Email</div>
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

          <div className="modal_my_profile_box_user_password">
            <div className="modal_my_profile_div_user_password">Password</div>

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

          {errorMessage ? (
            <div className="modal_my_profile_error_message">{errorMessage}</div>
          ) : null}

          <div className="modal_my_profile_sign_in_btn_box">
            <button
              className="modal_my_profile_sign_in_btn"
              onClick={clickSignInBtn}
            >
              Sign In
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

          <div
            className="modal_my_profile_sign_up_btn_box"
            onClick={handleGoSignUpPage}
          >
            Aren&#39; t you a member yet?
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Modal);
