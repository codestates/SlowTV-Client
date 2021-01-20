// Profile.js 하던거
// 리듀서에서 가져온 props를 ChangeUsername, ChangePassword로 보내기

import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
// import Side from "../Side";
import FakeSide from "../Fake/FakeSide";
import FakeNav from "../Fake/FakeNav";
import "./Profile.css";
// import ChangeUsername from "./ChangeUsername";

const Profile = ({
  // name,
  // password,
  // hadleOnChangeName,
  // hadleOnChangePassword,
  handleOnClickNameBtn,
  handleOnClickPasswordBtn,
  isClickedChangeNameBtn,
  isClickedChangePasswordBtn,
}) => {
  // console.log("🚀 ~ file: Profile.js ~ line 21 ~ password", password);
  // console.log("🚀 ~ file: Profile.js ~ line 21 ~ name", name);
  // const [isClickedUBtn, setIsClickedUBtn] = useState(false);
  // const [isClickedPWBtn, setIsClickedPWBtn] = useState(false);
  // const handleOnClickUBtn = () => {
  //   setIsClickedPWBtn(false);
  //   setIsClickedUBtn(!isClickedUBtn);
  // };
  // const handleOnClickPWbtn = () => {
  //   setIsClickedUBtn(false);
  //   setIsClickedPWBtn(!isClickedPWBtn);
  // };

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

  return (
    <div className="profile-page">
      <FakeNav />
      {/* <Side /> */}
      <FakeSide />

      <div className="test-profile-page">
        {/* 모달 버튼 큰 틀*******************************************************/}
        <div className="div-modal-btn-list">
          <div className="title-profile">Profile</div>

          {/* Username 네모 칸********************************************************/}
          <div className="div-modal-btn">
            <div className="div-modal-btn-text" onClick={handleOnClickNameBtn}>
              Username
            </div>
          </div>
          {/* Password 네모 칸********************************************************/}
          <div className="div-modal-btn">
            <div
              className="div-modal-btn-text"
              onClick={handleOnClickPasswordBtn}
            >
              Password
            </div>
          </div>
          {/* Background 네모 칸 ********************************************************/}
          <div className="div-modal-btn">
            <div
              className="div-modal-btn-text"
              onClick={handleOnClickPasswordBtn}
            >
              ex Backgoround
            </div>
          </div>
          {/* Language 네모 칸 ********************************************************/}
          <div className="div-modal-btn">
            <div
              className="div-modal-btn-text"
              onClick={handleOnClickPasswordBtn}
            >
              ex Dark mode
            </div>
          </div>
          {/* Logout 네모 칸 ********************************************************/}
          <div className="div-modal-btn">
            <div
              className="div-modal-btn-text"
              onClick={handleOnClickPasswordBtn}
            >
              ex Logout
            </div>
          </div>
          {/* Logged in user ********************************************************/}
          <div className="logged-in-user">
            Logged in as: kimcoding@icloud.com
            {/* 이름은 동적 셋팅 */}
          </div>
        </div>
        {isClickedChangeNameBtn ? (
          // 이름 변경 버튼 클릭 했을 때 *******************************************************
          <div className="div-open-change-name">
            {/* <div className="open-change-name"> */}
            <button onClick={handleOnClickNameBtn}>x</button>
            <div className="div-current-username">
              <div className="current-username">Current Username :</div>
              <div className="current-username">Coding Kim</div>
            </div>
            <form
              className="form-new-user-name"
              onSubmit={handleChangeUsername}
            >
              <div className="div-new-user-name">
                <label className="label-new-user-name" htmlFor="new-user-name">
                  New Username
                </label>
                <input
                  id="new-user-name"
                  type="text"
                  onChange={handleNameInputValue("newUsername")}
                  autoFocus
                  required
                ></input>
                <button className="update-btn" onSubmit={handleChangeUsername}>
                  Update
                </button>
              </div>
            </form>
            {/* </div> */}
          </div>
        ) : (
          <div></div>
        )}
        {isClickedChangePasswordBtn ? (
          // 비밀번호 변경 버튼 클릭 했을 때 *******************************************************
          <div>
            <div className="div-open-change-password">
              {/*  비밀번호 변경 모달 끄는 버튼 ********************************************************/}
              <button className="" onClick={handleOnClickPasswordBtn}>
                x
              </button>
              {/* 비밀번호 변경 폼 **************************************************************/}
              <form
                className="form-change-password"
                onSubmit={handleUpdatePassword}
              >
                <div className="form-change-password"></div>
                {/* //! 이전 비밀번호 ********************************************************/}
                <div className="div-old-user-password">
                  <label htmlFor="old-user-password">Old Password </label>
                  <input
                    id="old-user-password"
                    type="password"
                    onChange={handleOldPasswordInputValue("oldPassword")}
                  ></input>
                </div>
                {/* //! 바꿀 비밀번호 ********************************************************/}
                <div className="div-new-user-password">
                  <label htmlFor="new-user-password">New Password </label>
                  <input
                    id="new-user-password"
                    type="password"
                    onChange={handleNewPasswordInputValue("newPassword")}
                  ></input>
                </div>
                {/* //! 바꿀 비밀번호 확인 ********************************************************/}
                <div className="div-confirm-user-password">
                  <label htmlFor="confirm-user-password">
                    Confirm Password
                  </label>
                  <input
                    id="confirm-user-password"
                    type="password"
                    onChange={handleConfirmPasswordInputValue(
                      "confirmPassword"
                    )}
                  ></input>
                </div>
                {/* //! 업데이트 버튼 ********************************************************/}
                <div className="div-update-btn">
                  <button
                    className="update-btn"
                    onSubmit={handleUpdatePassword}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Profile);
