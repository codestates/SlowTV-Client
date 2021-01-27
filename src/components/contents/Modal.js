import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Modal.css";
import axios from "axios";
import cancel from "../../img/cancel.png";
import google from "../../img/google.png";
import github from "../../img/github.png";
import SLOW1 from "../../img/SLOW2.jpeg";

const Modal = ({
  openModal,
  closeModal,
  isLoggedIn,
  clickSignIn,
  clickLogout,
  changeEmail,
  changeNickName,
  email,
  nickname,
  handleOnClickCategory,
  githubAccessToken,
  googleAccessToken,
  getGithubAccessToken,
  getGoogleAccessToken,
  changeSignUp,
  history,
}) => {
  // ! 소셜 로그인
  // ! GitHub OAuth URL // ! client id 변수 처리 하기
  const GITHUB_LOGIN_URL =
    "https://github.com/login/oauth/authorize?client_id=1193d67b72770285bd45";
  const githubLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL);
    const url = new URL(window.location.href); // 현재 페이지의 href (URL) 반환, 현재 주소에 ?code=[authorization code] 있음
    const isCategory = url.pathname.split("/")[1];
    const nowPage = url.pathname.split("/")[2];
    // 여기서 실행해봤자 안 됨.
    history.push("/");
  };
  // ! Google OAuth URL // scope는 스페이스로 구분
  const GOOGLE_LOGIN_URL =
    "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&response_type=code&redirect_uri=https://localhost:3000/login&client_id=242040920697-frojb1pu8dc0gcpvcll2kdh0h152br8c.apps.googleusercontent.com";
  const googleLoginHandler = () => {
    window.location.assign(GOOGLE_LOGIN_URL);
  };

  // ! 모달창 로그인 시 인풋
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [usernameInputValue, setUsernameInputValue] = useState("");
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
      // ! 비디오 데이터 새로 가져오기 추가, 아래 로그아웃과 같은 문제임, 현재 유알엘 그대로 가져오기
      const url = new URL(window.location.href); // 현재 페이지의 href (URL) 반환, 현재 주소에 ?code=[authorization code] 있음
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
        // closeModal();
      } else if (nowPage === "favorites") {
        const video = await axios(`https://server.slowtv24.com/${nowPage}`, {
          withCredentials: true,
        });
        console.log(
          "🚀 ~ file: Modal.js ~ line 91 ~ clickSignInBtn ~ video",
          video
        );
        handleOnClickCategory(video.data.userFavorites);
      }
      // closeModal();
    }
  };

  // ! 유저 정보 업데이트
  const handleGetUserInfo = async () => {
    // const userInfo = await axios("https://server.slowtv24.com/userinfo", {
    const userInfoData = await axios("https://server.slowtv24.com/userinfo", {
      withCredentials: true,
    });
    changeEmail(userInfoData.data.userInfo.email);
    changeNickName(userInfoData.data.userInfo.nickname);
    closeModal();
  };

  // ! 로그아웃 후 비디오 즐겨찾기 새로고침
  const handleGoCategory = async (e) => {
    // ! 지금은 Water지만 유알엘 따와서 해당 페이지에 그대로 남아있게 하기
    // const category = e.target.attributes.value.value;
    const url = new URL(window.location.href); // 현재 페이지의 href (URL) 반환, 현재 주소에 ?code=[authorization code] 있음
    // const isCategory = url.pathname.split("/")[1];
    const nowPage = url.pathname.split("/")[2];

    if (nowPage !== "profile" && nowPage !== "favorites") {
      const video = await axios(
        `https://server.slowtv24.com/category/${nowPage}`,
        {
          withCredentials: true,
        }
      );
      // 카테코리 클릭 효과 -> 비디오 업데이트
      handleOnClickCategory(video.data.contents);
    } else if (nowPage === "favorites") {
      handleOnClickCategory(null);
    }
  };

  //! 로그아웃
  const handleLogout = async () => {
    const logout = await axios.post(
      // "https://server.slowtv24.com/logout",
      "https://server.slowtv24.com/logout",
      null,
      {
        withCredentials: true,
      }
    );
    console.log(
      "🚀 ~ file: Modal.js ~ line 86 ~ handleLogout ~ logout",
      logout
    );
    // if (logout !== undefined) {
    clickLogout();
    getGithubAccessToken(null);
    getGoogleAccessToken(null);
    changeEmail(null);
    changeNickName(null);
    handleGoCategory();
    // }
  };

  // ! Sign Up 버튼 클릭시 페이지로 이동
  const handleGoSignUpPage = () => {
    changeSignUp();
    history.push("/login");
  };

  return (
    <div className="modal">
      {/* 프로필 모달 */}
      {/* //! 로그인 유저 */}
      {isLoggedIn ? (
        // ! 로그인 시 모달창 아이콘 클릭
        <div className="modal_is_logged_in">
          {/* //! 모달창 종료 버튼 */}
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
          {/* // ! 유저 이름 */}
          {nickname ? (
            <div className="modal_my_profile_username">Hi, {nickname}</div>
          ) : (
            <div></div>
          )}

          {/* //! 유저 이미지 */}
          <div className="modal_my_profile_div_user_img">
            <img
              className="modal_my_profile_user_img"
              src={github}
              // src={SLOW1}
              alt="user_img"
            ></img>
          </div>
          {/* 이름 변경 버튼 */}
          <Link
            className="Modal_page_Link"
            to="/contents/profile/update-username"
          >
            <div className="modal_my_profile_change_username_btn">
              Change Name
            </div>
          </Link>
          {/* 비밀번호 변경 버튼 */}
          <Link
            className="Modal_page_Link"
            to="/contents/profile/update-password"
          >
            <div
              className="modal_my_profile_change_password_btn"
              // onClick={assignChangeNamePage}
            >
              Change Password
            </div>
          </Link>
          <div className="modal_my_profile_logout_btn" onClick={handleLogout}>
            Logout
          </div>
        </div>
      ) : (
        // !비회원이 모달 클릭한 경우
        <div className="modal_is_not_logged_in">
          {/* //! 모달창 종료 버튼 */}
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
          {/* ID box */}
          <div className="modal_my_profile_box_user_id">
            <div className="modal_my_profile_div_user_id">ID</div>
            <div className="modal_my_profile_input_user_id">
              <input
                className="modal_my_profile_input"
                onChange={handleInputValue("email")}
              ></input>
            </div>
          </div>
          {/* PW box */}
          <div className="modal_my_profile_box_user_password">
            <div className="modal_my_profile_div_user_password">Password</div>
            <div className="modal_my_profile_input_user_password">
              <input
                className="modal_my_profile_input"
                type="password"
                onChange={handleInputValue("password")}
              ></input>
            </div>
          </div>
          {/* Sign In box */}
          <div className="modal_my_profile_sign_in_btn_box">
            <button
              className="modal_my_profile_sign_in_btn"
              onClick={clickSignInBtn}
            >
              Sign In
            </button>
          </div>
          {/* Social Login box */}
          <div className="modal_my_profile_social_login_btn_box">
            {/* Google */}
            <div className="modal_my_profile_social_login_google_btn_box">
              {/* 아이콘으로 대체 예정 */}
              <button
                className="modal_my_profile_social_login_google_btn"
                onClick={googleLoginHandler}
              >
                <img
                  className="modal_my_profile_social_login_google_btn_img"
                  src={google}
                  alt="google"
                ></img>
              </button>
            </div>
            {/* GitHub */}
            <div className="modal_my_profile_social_login_github_btn_box">
              <button
                className="modal_my_profile_social_login_github_btn"
                onClick={githubLoginHandler}
              >
                <img
                  className="modal_my_profile_social_login_github_btn_img"
                  src={github}
                  alt="github"
                ></img>
              </button>
            </div>
          </div>
          {/* Sign Up box */}
          <div
            className="modal_my_profile_sign_up_btn_box"
            onClick={handleGoSignUpPage}
          >
            {/* <button
              className="modal_my_profile_sign_up_btn"
              onClick={handleGoSignUpPage}
            >
              Aren't you a member yet?
            </button> */}
            Aren't you a member yet?
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Modal);
