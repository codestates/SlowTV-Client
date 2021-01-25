import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Modal.css";
import axios from "axios";

const Modal = ({
  setIsClicked,
  isLoggedIn,
  clickSignIn,
  clickLogout,
  changeEmail,
  changeNickName,
  email,
  nickname,
  history,
}) => {
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

  // ! postUserInfo
  // https://server.slowtv24.com/userinfo
  // https://mayweather24.com/userinfo
  const handleGetUserInfo = async () => {
    // const userInfo = await axios("https://server.slowtv24.com/userinfo", {
    const userInfoData = await axios("https://mayweather24.com/userinfo", {
      withCredentials: true,
    });
    console.log(
      "🚀 ~ file: Login.js ~ line 69 ~ handleGetUserInfo ~ userInfoData?!?",
      userInfoData.data.userInfo
    );
    changeEmail(userInfoData.data.userInfo.email);
    changeNickName(userInfoData.data.userInfo.nickname);
    setIsClicked();
    // history.push("/contents");
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

  //! 로그아웃
  const handleLogout = async () => {
    console.log("핸들로그아웃");

    const logout = await axios.post(
      "https://mayweather24.com/logout",
      // "https://server.slowtv24.com/logout",
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
    // }
  };

  // Sign Up 버튼 클릭시 페이지로 이동
  const handleGoSignUpPage = () => {
    history.push("/login");
  };

  return (
    <div className="modal">
      {/* 프로필 모달 */}
      {/* //! 로그인 유저 */}
      {isLoggedIn ? (
        // ! 로그인 시 모달창 아이콘 클릭
        <div className="modal_is_logged_in">
          {/* // ! 유저 이름 */}
          {nickname ? (
            <div className="modal_my_profile_username">Hi, {nickname}</div>
          ) : (
            <div></div>
          )}

          {/* //! 유저 이미지 */}
          <div className="modal_my_profile_div_user_img">
            <img className="modal_my_profile_user_img" alt="user_img"></img>
          </div>
          {/* 이름 변경 버튼 */}
          <Link to="/contents/profile/update-username">
            <div className="modal_my_profile_change_username_btn">
              Change Name
            </div>
          </Link>
          {/* 비밀번호 변경 버튼 */}
          <Link to="/contents/profile/update-password">
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
          {/* Sign Up box */}
          <div className="modal_my_profile_sign_up_btn_box">
            <button
              className="modal_my_profile_sign_up_btn"
              onClick={handleGoSignUpPage}
            >
              Sign Up
            </button>
          </div>
          {/* Social Login box */}
          <div className="modal_my_profile_sign_in_btn_box">
            {/* Google */}
            <div>
              {/* 아이콘으로 대체 예정 */}
              <button>Google</button>
            </div>
            {/* GitHub */}
            <div>
              <button>GitHub</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Modal);
