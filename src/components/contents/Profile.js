import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import SideRemoteControlContainer from "../../containers/SideRemoteControlContainer";
import NavContainer from "../../containers/NavContainer";
import ModalContainer from "../../containers/ModalContainer";
import "./Profile.css";
import axios from "axios";
import google from "../../img/google.png";
import github from "../../img/github.png";

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
}) => {
  // ! Sign Up 버튼 클릭시 페이지로 이동
  const handleGoSignUpPage = () => {
    changeSignUp();
    history.push("/login");
  };

  //! 게스트 -> 일반 로그인
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const handleInputValue = (key) => (e) => {
    if (key === "email") {
      setEmailInputValue(e.target.value);
    } else if (key === "password") {
      setPasswordInputValue(e.target.value);
    }
  };

  // ! 로그인 버튼 클릭 -> isLoggedIn : true
  const clickSignInBtn = async () => {
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
  };

  // ! 로그인 후 유저정보 상태 값에 넣기
  const handleGetUserInfo = async () => {
    const userInfo = await axios("https://server.slowtv24.com/userinfo", {
      withCredentials: true,
    });

    changeEmail(userInfo.data.userInfo.email);
    changeNickName(userInfo.data.userInfo.nickname);
    history.push("/contents");
  };

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

  // ! 로그아웃
  const handleLogout = async () => {
    const logout = await axios.post(
      "https://server.slowtv24.com/logout",
      null,
      {
        withCredentials: true,
      }
    );
    clickLogout();
  };

  const messageForSocial = () => {
    alert("You can't change your profile at social login.");
  };

  return (
    <div className="profile_page">
      <NavContainer />
      <SideRemoteControlContainer />
      {isModalClicked ? <ModalContainer /> : <div></div>}
      {/* 프로필 시작 */}
      {isLoggedIn ? (
        <div className="profile_page_container">
          <div className="profile_page_container_title">Profile</div>
          <div className="profile_page_inner_container">
            {/* //! User ID */}
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
              // {/* //! User naem */}
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

            {/* // ! User PW */}
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

            {/* // !Logout Btn */}
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
            <div>Please log in and use it.</div>
            <p></p>
            Slow TV helps you experience
            <br></br>
            the aesthetics of slowness,
            <br></br>
            tired of your busy daily life.
          </div>

          <div className="loaded_favorites_page_guest_sign_in_box">
            {/* email */}
            <div className="loaded_favorites_page_guest_sign_in_email_box">
              <input
                className="loaded_favorites_page_guest_sign_in_email_input"
                onChange={handleInputValue("email")}
              ></input>
            </div>
            {/* password */}
            <div className="loaded_favorites_page_guest_sign_in_password_box">
              <input
                className="loaded_favorites_page_guest_sign_in_password"
                onChange={handleInputValue("password")}
              ></input>
            </div>
            {/* sign in */}
            <div className="loaded_favorites_page_guest_sign_in_sign_in_box">
              <button
                className="loaded_favorites_page_guest_sign_in_btn"
                onClick={clickSignInBtn}
              >
                Sign In
              </button>
            </div>
            {/* //! social  */}
            <div className="loaded_favorites_page_guest_sign_in_social_box">
              {/* //! google */}
              <div className="loaded_favorites_page_guest_sign_in_social_google_box">
                <button
                  className="loaded_favorites_page_guest_sign_in_social_google_btn"
                  onClick={googleLoginHandler}
                >
                  <img
                    className="loaded_favorites_page_guest_sign_in_social_google_img"
                    src={google}
                    alt="google"
                  ></img>
                </button>
              </div>
              {/* //! github */}
              <div className="loaded_favorites_page_guest_sign_in_social_github_box">
                <button
                  className="loaded_favorites_page_guest_sign_in_social_github_btn"
                  onClick={githubLoginHandler}
                >
                  <img
                    className="loaded_favorites_page_guest_sign_in_social_githu_img"
                    src={github}
                    alt="githu"
                  ></img>
                </button>
              </div>
            </div>
            {/* //! hr */}
            <div className="loaded_favorites_page_guest_sign_in_box_hr"></div>
            {/* //! sign up */}
            <div className="loaded_favorites_page_guest_sign_in_sign_up_box">
              <button
                className="loaded_favorites_page_guest_sign_up_btn"
                onClick={handleGoSignUpPage}
              >
                Create New Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* end */}
    </div>
  );
};

export default withRouter(Profile);
