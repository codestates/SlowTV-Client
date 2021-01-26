// Profile.js 하던거
// 리듀서에서 가져온 props를 ChangeUsername, ChangePassword로 보내기

import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
// import Side from "../Side";
import FakeSideContainer from "../../containers/FakeSideContainer";
import SideRemoteControlContainer from "../../containers/SideRemoteControlContainer";
import NavContainer from "../../containers/NavContainer";
import ModalContainer from "../../containers/ModalContainer";
import "./Profile.css";
import axios from "axios";
// import ChangeUsername from "./ChangeUsername";

const Profile = ({
  history,
  email,
  nickname,
  isModalClicked,
  isLoggedIn,
  clickLogout,
  githubAccessToken,
  googleAccessToken,
}) => {
  // New name
  const [newNameInputValue, setNewNameInputValue] = useState("");
  // Old PW
  const [oldPasswordInputValue, setOldPasswordInputValue] = useState("");
  // New PW
  const [newPasswordInputValue, setNewPasswordInputValue] = useState("");
  // Confirm PW
  const [confirmPasswordInputValue, setConfirmPasswordInputValue] = useState(
    ""
  );

  // ! change username
  // 1. 인풋 벨류 받아서 셋스테이트 하기
  const handleNameInputValue = (key) => (e) => {
    setNewNameInputValue({ [key]: e.target.value }); // 객체 리터럴, 객체에 동적으로 속성 추가 가능, [변수] ex)[key] 가 속성명(키)이 되어줌.
    // 예전 문법에선 obj[key] 이렇게 객체 바깥에서 해야 했다면, ES2015 문법에서는 객체 리터럴 안에 동적 속성을 선언해도 됨.
    // key에 email이 들어가면 email에 e.target.value 값이 들어감
  };
  // ! 2. 네트워크 요청할 값 스테이트를 비구조화
  const { newUsername } = newNameInputValue;

  //! 3. 폼에서 update 버튼 누르면 axios 보내고 바뀐 유저네임 값도 받음
  const handleChangeUsername = (e) => {
    console.log(
      "🚀 ~ file: Profile.js ~ line 46 ~ handleChangeUsername ~ username",
      newUsername
    );
    // axios.post/유저네임 바꾸는 api
    // axios.get/유저네임 받기
    // setState 유저 네임
    e.preventDefault();
  };

  // ! change PW
  //! 1.인풋 벨류 받아서 셋스테이트 하기
  //  1. old
  const handleOldPasswordInputValue = (key) => (e) => {
    setOldPasswordInputValue({ [key]: e.target.value }); // 객체 리터럴, 객체에 동적으로 속성 추가 가능, [변수] ex)[key] 가 속성명(키)이 되어줌.
    // 예전 문법에선 obj[key] 이렇게 객체 바깥에서 해야 했다면, ES2015 문법에서는 객체 리터럴 안에 동적 속성을 선언해도 됨.
    // key에 email이 들어가면 email에 e.target.value 값이 들어감
  };
  //  1. new
  const handleNewPasswordInputValue = (key) => (e) => {
    setNewPasswordInputValue({ [key]: e.target.value }); // 객체 리터럴, 객체에 동적으로 속성 추가 가능, [변수] ex)[key] 가 속성명(키)이 되어줌.
    // 예전 문법에선 obj[key] 이렇게 객체 바깥에서 해야 했다면, ES2015 문법에서는 객체 리터럴 안에 동적 속성을 선언해도 됨.
    // key에 email이 들어가면 email에 e.target.value 값이 들어감
  };
  //  1. confirm
  const handleConfirmPasswordInputValue = (key) => (e) => {
    setConfirmPasswordInputValue({ [key]: e.target.value }); // 객체 리터럴, 객체에 동적으로 속성 추가 가능, [변수] ex)[key] 가 속성명(키)이 되어줌.
    // 예전 문법에선 obj[key] 이렇게 객체 바깥에서 해야 했다면, ES2015 문법에서는 객체 리터럴 안에 동적 속성을 선언해도 됨.
    // key에 email이 들어가면 email에 e.target.value 값이 들어감
  };

  // ! 2. 네트워크 요청할 값 스테이트를 비구조화
  const { oldPassword } = oldPasswordInputValue;
  const { newPassword } = newPasswordInputValue;
  const { confirmPassword } = confirmPasswordInputValue;

  // ! 3. 폼에서 update 버튼 누르면 axios 보내고 바뀐 유저네임 값도 받음
  const handleUpdatePassword = (e) => {
    console.log(
      "🚀 ~ file: Profile.js ~ line 46 ~ handleChangeUsername ~ username",
      oldPassword
    );
    console.log(
      "🚀 ~ file: Profile.js ~ line 40 ~ newPasswordInputValue",
      newPassword
    );
    console.log(
      "🚀 ~ file: Profile.js ~ line 43 ~ confirmPasswordInputValue",
      confirmPassword
    );
    if (newPassword === confirmPassword) {
      console.log("비밀번호 일치 확인");
      // axios.post/비밀번호 바꾸는 api
      // 로그아웃 시키거나 안시키거나
    }

    e.preventDefault();
  };

  // ! 비밀번호 일치 확인
  // 1. 이전 비밀번호가 맞는지 -> 서버에서
  // 2. new 와 cofirm이 일치하는지 -> 클라이언트에서

  //test

  const consoleTest = (e) => {
    if (!githubAccessToken && !googleAccessToken) {
      const route = e.target.attributes.value.value;
      // console.log(   "🚀 route",   route );
      history.push(`/contents/profile/${route}`);
    }
  };

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

  return (
    <div className="profile_page">
      <NavContainer />
      <SideRemoteControlContainer />
      {isModalClicked ? <ModalContainer /> : <div></div>}
      {/* 프로필 시작 */}
      {isLoggedIn ? (
        <div className="profile_page_container">
          <div className="profile_page_title">Profile</div>
          {/* User ID */}
          <div className="profile_page_box_user_id">
            <div className="profile_page_current_user_id">ID :</div>
            <div className="profile_page_current_user_id_value">{email}</div>
          </div>
          {/* // !User naem */}
          <div
            className="profile_page_box_username"
            onClick={consoleTest}
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
            {/* <div className="profile_page_change_username">New Username :</div> */}
            {/* <input className="profile_page_change_username_value"></input> */}
          </div>
          {/* // ! User PW */}
          {githubAccessToken || googleAccessToken ? null : (
            <div
              className="profile_page_box_user_password"
              onClick={consoleTest}
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
          )}

          {/* // !Logout Btn */}
          <div className="profile_page_box_logout_btn">
            <button className="profile_page_logout_btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div>로그인 후 이용 가능합니다.</div>
      )}

      {/* end */}
    </div>
  );
};

export default withRouter(Profile);
