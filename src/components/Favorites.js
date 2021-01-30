import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import SideRemoteControlContainer from "../containers/SideRemoteControlContainer";
import NavContainer from "../containers/NavContainer";
import ModalContainer from "../containers/ModalContainer";
import axios from "axios";
import outlineLike from "../img/OutlineLike.png";
import fillLike from "../img/FillLike.png";
import google from "../img/google.png";
import github from "../img/github.png";
import emailIcon from "../img/email-icon.png";
import passwordIcon from "../img/lock.png";
import "./Favorites.css";

const Favorites = ({
  history,
  isLoggedIn,
  isModalClicked,
  videoData,
  clickThumbnail,
  clickSignIn,
  changeNickName,
  changeEmail,
  changeSignUp,
  handleOnClickCategory,
  clickRemoteControl,
}) => {
  sessionStorage.setItem("videoData", JSON.stringify(videoData));

  // ! Sign Up 버튼 클릭시 페이지로 이동
  const handleGoSignUpPage = () => {
    changeSignUp();
    history.push("/login");
  };

  //! 게스트 -> 일반 로그인
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

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
    }
  };

  // ! 일반 로그인 유효성 검사
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);

  // ! 로그인 버튼 클릭 -> isLoggedIn : true
  const clickSignInBtn = async () => {
    if (emailErrorMessage === null && passwordErrorMessage === null) {
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
    const favorites = await axios("https://server.slowtv24.com/favorites", {
      withCredentials: true,
    });
    handleOnClickCategory(favorites.data.userFavorites);
  };

  // ! GitHub OAuth URL // ! client id 변수 처리 하기
  const GITHUB_LOGIN_URL =
    "https://github.com/login/oauth/authorize?client_id=1193d67b72770285bd45";
  const githubLoginHandler = () => {
    window.location.assign(GITHUB_LOGIN_URL);
  };
  // ! Google OAuth URL // scope는 스페이스로 구분
  const GOOGLE_LOGIN_URL =
    "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&response_type=code&redirect_uri=https://localhost:3000/contents&client_id=242040920697-frojb1pu8dc0gcpvcll2kdh0h152br8c.apps.googleusercontent.com";
  const googleLoginHandler = () => {
    window.location.assign(GOOGLE_LOGIN_URL);
  };

  // ! 즐겨찾기 수정 후 비디오 새로고침
  const handleGoCategory = async (e) => {
    try {
      const video = await axios(`https://server.slowtv24.com/favorites`, {
        withCredentials: true,
      });
      if (video) {
        handleOnClickCategory(video.data.userFavorites);
      }
    } catch (error) {
      handleOnClickCategory(null);
    }
  };

  // ! 썸네일 클릭 시 비디오 아이디 구하기 -> 비디오 플레이어에서 해당 아이디 영상 재생
  const getVideoData = async (e) => {
    const videoId = e.target.attributes.value.value; // ! 제거 시 여기서 에러
    const id = videoId.split(" ")[0];
    const isAdded = videoId.split(" ")[1];

    // ! 썸네일 클릭 시 -> 영상 재생
    if (!isAdded) {
      clickThumbnail(id);
    } else if (isLoggedIn && isAdded) {
      // ! 추가
      const video = videoData.filter((data) => data.id === Number(id));
      if (isAdded === "undefined") {
        const favorites = await axios.post(
          "https://server.slowtv24.com/add-favorite",
          {
            link: video[0].contentlink,
          },
          {
            withCredentials: true,
          }
        );
        handleGoCategory();
      } else if (isLoggedIn && isAdded) {
        // ! 제거
        const favorites = await axios.post(
          "https://server.slowtv24.com/delete-favorite",
          {
            link: video[0].contentlink,
          },
          {
            withCredentials: true,
          }
        );
        handleGoCategory();
      }
    } else if (!isLoggedIn) {
      alert("로그인 시 사용 가능합니다 맨 마지막 분기.");
    }
  };

  // ! videoData mapping
  let videoList = null;
  if (videoData) {
    const handleDrag = () => {
      const draggables = document.querySelectorAll("water_page_thumbnail");
      const container = document.querySelectorAll("water_page_container");

      draggables.forEach((draggable) => {
        draggable.addEventListner("dragstart", () => {
          console.log("drag start");
        });
      });
    };

    videoList = videoData.map((video) => (
      <div
        className="water_page_thumbnail"
        key={video.id}
        draggable="true"
        onDrag={handleDrag}
      >
        <div
          className="water_page_thumbnail__btn_box"
          value={video.id}
          onClick={getVideoData}
        >
          <div
            className={
              video.isFavorite
                ? "water_page_thumbnail__btn_like"
                : "water_page_thumbnail__btn"
            }
            value={`${video.id} ${video.isFavorite}`}
          >
            {video.isFavorite ? (
              <img
                className="water_page_thumbnail__btn_icon"
                src={fillLike}
                alt="fillLike"
                value={`${video.id} ${video.isFavorite}`}
              ></img>
            ) : (
              <img
                className="water_page_thumbnail__btn_icon"
                src={outlineLike}
                alt="outlineLike"
                value={`${video.id} ${video.isFavorite}`}
              ></img>
            )}
          </div>
        </div>
        <img
          className="water_page_thumbnail_img"
          src={video.thumbnail}
          alt="undefined thumbnail"
        ></img>
      </div>
    ));
  }

  return (
    <div className={isLoggedIn ? "favorites_page" : "favorites_page_guest"}>
      {/* //! 비디오 데이터 없으면 */}
      {!videoData ? (
        isLoggedIn ? (
          <div className="loaded_favorites_page_nothing">
            <NavContainer />
            <SideRemoteControlContainer />
            {isModalClicked ? <ModalContainer /> : <div></div>}
            <div
              className="loaded_favorites_page_nothing_message"
              onClick={clickRemoteControl}
            >
              <div className="loaded_favorites_page_nothing_message_first">
                You don&#39;t have a favorites list.
              </div>
              <div className="loaded_favorites_page_nothing_message_second">
                If you click here, I&#39;ll give you a remote control.
              </div>
              <div className="loaded_favorites_page_nothing_message_third">
                Let&#39;s go add some favorites.
              </div>
            </div>
          </div>
        ) : (
          <div className="loaded_favorites_page">
            <NavContainer />
            <SideRemoteControlContainer />
            {isModalClicked ? <ModalContainer /> : <div></div>}

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
                {/* //! email */}
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
                {/* //! password */}
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
                    minLength="8"
                    maxLength="15"
                    onChange={handleInputValue("password")}
                    placeholder="password"
                  ></input>
                </div>
                {/* //! sign in */}
                <div className="loaded_favorites_page_guest_sign_in_sign_in_box">
                  <button
                    className="loaded_favorites_page_guest_sign_in_btn"
                    onClick={clickSignInBtn}
                  >
                    Sign In
                  </button>
                </div>
                {/* //! OAuth */}
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
                {/* //! hr */}
                <div className="loaded_favorites_page_guest_sign_in_box_hr"></div>
                {/* //! sign up */}
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
          </div>
        )
      ) : (
        <div className="loaded_favorites_page">
          <NavContainer />
          <SideRemoteControlContainer />
          {isModalClicked ? <ModalContainer /> : <div></div>}
          {/* 썸네일 컨테이너 */}
          <div className="water_page_container">
            {/* thumbnail x 12 */}
            <div className="water_page_small_size_lists">{videoList}</div>
          </div>
          {/* 썸네일 컨테이너 끝 */}
        </div>
      )}
    </div>
  );
};

export default withRouter(Favorites);
