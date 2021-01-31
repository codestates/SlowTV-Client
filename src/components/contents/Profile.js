import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import SideRemoteControlContainer from "../../containers/SideRemoteControlContainer";
import NavContainer from "../../containers/NavContainer";
import ModalContainer from "../../containers/ModalContainer";
import axios from "axios";
import google from "../../img/google.png";
import github from "../../img/github.png";
import emailIcon from "../../img/email-icon.png";
import passwordIcon from "../../img/lock.png";
import "./Profile.css";

const Profile = ({
  history,
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
  const handleGoSignUpPage = () => {
    changeSignUp();
    history.push("/login");
  };

  const [emailInputValue, setEmailInputValue] = useState(null);
  const [passwordInputValue, setPasswordInputValue] = useState(null);

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
    }
  };

  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);

  const clickSignInBtn = async () => {
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
  };

  const handleGetUserInfo = async () => {
    const userInfo = await axios("https://server.slowtv24.com/userinfo", {
      withCredentials: true,
    });
    sessionStorage.setItem("email", userInfo.data.userInfo.email);
    sessionStorage.setItem("name", userInfo.data.userInfo.nickname);
    changeEmail(userInfo.data.userInfo.email);
    changeNickName(userInfo.data.userInfo.nickname);
  };

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
  };

  const messageForSocial = () => {
    alert("You can't change your profile at social login.");
  };

  return (
    <div className="profile_page">
      <NavContainer />
      <SideRemoteControlContainer />
      {isModalClicked ? <ModalContainer /> : <div></div>}

      {isLoggedIn ? (
        <div className="profile_page_container">
          <div className="profile_page_container_title">Profile</div>
          <div className="profile_page_inner_container">
            <div className="profile_page_box_user_id">
              <div className="profile_page_current_user_id">ID :</div>
              <div className="profile_page_current_user_id_value">{email}</div>
            </div>
            {githubAccessToken || googleAccessToken ? (
              <div
                className="profile_page_box_social_username"
                value="update-username"
                onClick={messageForSocial}
              >
                <div
                  className="profile_page_current_username"
                  value="update-username"
                >
                  Current Username :
                </div>
                <div
                  className="profile_page_current_username_value"
                  value="update-username"
                >
                  {nickname}
                </div>
              </div>
            ) : (
              <Link
                className="Profile_Link"
                to="/contents/profile/update-username"
              >
                <div
                  className="profile_page_box_username"
                  value="update-username"
                >
                  <div
                    className="profile_page_current_username"
                    value="update-username"
                  >
                    Current Username :
                  </div>
                  <div
                    className="profile_page_current_username_value"
                    value="update-username"
                  >
                    {nickname}
                  </div>
                </div>
              </Link>
            )}

            {githubAccessToken || googleAccessToken ? (
              <div
                className="profile_page_box_social_user_password"
                value="update-password"
                onClick={messageForSocial}
              >
                <div
                  className="profile_page_change_user_password"
                  value="update-password"
                >
                  New Password :
                </div>
                <div
                  className="profile_page_change_user_password_value"
                  value="update-password"
                >
                  12345678
                </div>
              </div>
            ) : (
              <Link
                className="Profile_Link"
                to="/contents/profile/update-password"
              >
                <div
                  className="profile_page_box_user_password"
                  value="update-password"
                >
                  <div
                    className="profile_page_change_user_password"
                    value="update-password"
                  >
                    New Password :
                  </div>
                  <div
                    className="profile_page_change_user_password_value"
                    value="update-password"
                  >
                    12345678
                  </div>
                </div>
              </Link>
            )}

            <div className="profile_page_box_logout_btn">
              <button
                className="profile_page_logout_btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="loaded_favorites_page">
          <div className="loaded_favorites_page_guest_message">
            <div className="loaded_favorites_page_guest_message_first">
              Please log in and use it.
            </div>
            <p></p>
            <div className="loaded_favorites_page_guest_message_second">
              Slow TV helps you experience
            </div>
            <div className="loaded_favorites_page_guest_message_third">
              the aesthetics of slowness,
            </div>
            <div className="loaded_favorites_page_guest_message_fourth">
              tired of your busy daily life.
            </div>
          </div>

          <div className="loaded_favorites_page_guest_sign_in_box">
            <div
              className={
                emailErrorMessage
                  ? "loaded_favorites_page_guest_sign_in_email_box_error"
                  : "loaded_favorites_page_guest_sign_in_email_box"
              }
            >
              <img
                className="loaded_favorites_page_guest_sign_in_email_box_icon"
                src={emailIcon}
                alt="emailIcon"
              ></img>
              <input
                className="loaded_favorites_page_guest_sign_in_email_input"
                type="email"
                autoComplete="on"
                onChange={handleInputValue("email")}
                autoFocus="ture"
                placeholder="email"
              ></input>
            </div>
            <div
              className={
                passwordErrorMessage
                  ? "loaded_favorites_page_guest_sign_in_password_box_error"
                  : "loaded_favorites_page_guest_sign_in_password_box"
              }
            >
              <img
                className="loaded_favorites_page_guest_sign_in_password_box_icon"
                src={passwordIcon}
                alt="passwordIcon"
              ></img>
              <input
                className="loaded_favorites_page_guest_sign_in_password"
                type="password"
                // minLength="8"
                maxLength="15"
                onChange={handleInputValue("password")}
                placeholder="password"
              ></input>
            </div>
            <div className="loaded_favorites_page_guest_sign_in_sign_in_box">
              <button
                className="loaded_favorites_page_guest_sign_in_btn"
                onClick={clickSignInBtn}
              >
                Sign In
              </button>
            </div>
            <div className="favorites_login_box_right_login_form_OAuth_box">
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
            <div className="loaded_favorites_page_guest_sign_in_box_hr"></div>
            <div className="loaded_favorites_page_guest_sign_in_sign_up_box">
              <button
                className="loaded_favorites_page_guest_sign_up_btn"
                onClick={handleGoSignUpPage}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Profile);
