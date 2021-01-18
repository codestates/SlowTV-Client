// 리듀서에서 가져온 props를 ChangeUsername, ChangePassword로 보내기

import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Side from "../Side";
import FakeNav from "../Fake/FakeNav";
import "./Profile.css";
import ChangeUsername from "./ChangeUsername";

const Profile = ({
  // 액션
  isClickedChangeNameBtn,
  isClickedChangePasswordBtn,
  // name,
  // password,
  // 액션 생성 함수
  handleOnClickNameBtn,
  handleOnClickPasswordBtn,
  // 한 글자 바뀌면 바로 디스패치 되는 문제 발생.
  // hadleOnChangeName,
  // hadleOnChangePassword,
  history,
}) => {
  const handleOnChangePage = (e) => {
    console.log("e.target.value>>>>", e.target.value);
    console.log(
      "`/contents/profile/${e.target.value}`",
      `/contents/profile/${e.target.value}`
    );
    history.push(`/contents/profile/${e.target.value}`);
  };

  // const [name, setName] = useState("");
  // const [oldPassword, confirmOldPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmPassword, confirmNewPassword] = useState("");

  // // 이름 바꾸기
  // const hadleOnChangeName = (e) => {
  //   setName(e.target.value);
  //   console.log("name>>", name);
  //   e.preventDefault();
  // };
  // console.log("name2>>", name);

  // // 이전 비밀번호 확인
  // const hadleOnConfirmOldPassword = (e) => {
  //   e.preventDefault();
  //   confirmOldPassword(e.target.value);
  // };

  // // 새로운 비밀번호 변경
  // const handleOnChangeNewPassword = (e) => {
  //   e.preventDefault();
  //   setNewPassword(e.target.value);
  // };

  // // 새로운 비밀번호 일치 확인
  // const handleOnConfirmNewPassword = (e) => {
  //   e.preventDefault();
  //   confirmNewPassword(e.target.value);
  // };

  // const testConsole = () => {
  //   console.log("name???", name);
  // };

  // key를 인자로 받아서 바꾸기
  // const [inputValue, setInputValue] = useState("");

  // const handleInputValue = (key) => (e) => {
  //   // Login과 같음.
  //   setInputValue({ [key]: e.target.value });
  //   console.log("inputValue", inputValue); // 비동기라 바로 안바뀜
  // };
  // console.log("inputValue2", inputValue); // 이제 바뀜

  return (
    <div className="profile-page">
      <FakeNav />
      <Side />
      <div className="profile">
        {/* 이름 변경 */}
        {isClickedChangeNameBtn ? (
          <div>
            <div className="change-name-btn">
              <button onClick={handleOnClickNameBtn}>뒤로 가기 아이콘</button>
            </div>
            <div className="div-change-name">
              <div className="form-change-name">
                <div className="div-current-username">
                  <div className="current-username">Current Username :</div>
                  <div className="current-username">Coding Kim</div>
                </div>
                {/* form하면 새로고침되서 콘솔 못보니 테스트용 */}
                {/* <form className="form-new-user-name" onSubmit={consoleState}> */}
                <div className="form-new-user-name">
                  <label htmlFor="new-user-name">New Username </label>
                  <input
                    id="new-user-name"
                    type="text"
                    // onChange={hadleOnChangeName}
                    autoFocus
                    required
                  ></input>
                  {/* <button className="update-btn">Update</button> */}
                  {/* form하면 새로고침되서 콘솔 못보니 테스트용 */}
                  <button
                    className="update-btn"
                    // onClick={testConsole}
                  >
                    Update
                  </button>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="change-name-btn">
              <button
                // onClick={handleOnClickNameBtn}
                onClick={handleOnChangePage}
                value="change-username"
              >
                이름 변경
              </button>
            </div>
          </div>
        )}

        {/* 비밀번호 변경 */}
        {isClickedChangePasswordBtn ? (
          <div>
            <div className="change-password-btn">
              <button onClick={handleOnClickPasswordBtn}>
                뒤로 가기 아이콘
              </button>
            </div>
            <div className="div-change-password">
              {/* <div className="div-old-user-password"> */}
              {/* form하면 새로고침되서 콘솔 못보니 테스트용 */}
              {/* <form className="form-change-password" onSubmit={consoleState}> */}
              <div className="form-change-password"></div>
              <div className="div-old-user-password">
                <label htmlFor="old-user-password">Old Password </label>
                <input
                  id="old-user-password"
                  type="password"
                  // onChange={hadleOnConfirmOldPassword}
                  //   minLength="7"
                  //   maxLength="15"
                  //   required
                ></input>
              </div>
              {/* </div> */}
              {/* <div className="div-new-user-password"> */}
              <div className="div-new-user-password">
                <label htmlFor="new-user-password">New Password </label>
                <input
                  id="new-user-password"
                  type="password"
                  // onChange={handleOnChangeNewPassword}
                  //   minLength="7"
                  //   maxLength="15"
                  //   required
                ></input>
              </div>
              {/* </div> */}
              {/* <div className="div-confirm-user-password"> */}
              <div className="div-confirm-user-password">
                <label htmlFor="confirm-user-password">Confirm Password </label>
                <input
                  id="confirm-user-password"
                  type="password"
                  // onChange={handleOnConfirmNewPassword}
                  //   minLength="7"
                  //   maxLength="15"
                  //   required
                ></input>
              </div>
              <div className="div-update-btn">
                <button className="update-btn">Update</button>
              </div>
            </div>
            {/* </form> */}
          </div>
        ) : (
          // </div>
          <div className="change-password-btn">
            <button
              // onClick={handleOnClickPasswordBtn}
              onClick={handleOnChangePage}
              value="change-password"
            >
              Change Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Profile);
