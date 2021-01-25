import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import FakeSide from "../Fake/FakeSide";
import NavContainer from "../../containers/NavContainer";
import ModalContainer from "../../containers/ModalContainer";
import "./ChangeUserPassword.css";
import axios from "axios";

const ChangeUserPassword = ({
  history,
  isLoggedIn,
  isModalClicked,
  clickLogout,
}) => {
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sameNewAsConfrim, setSameNewAsConfrim] = useState(true);

  // !뒤로가기
  const handleGoBack = () => {
    history.goBack();
  };

  // ! 인풋 값 받아오기
  const handleInputValue = (key) => (e) => {
    if (key === "prevPassword") {
      setPrevPassword(e.target.value);
      console.log("prevPassword?", prevPassword);
    } else if (key === "newPassword") {
      setNewPassword(e.target.value);
      console.log("newPassword?", newPassword);
    } else if (key === "confirmPassword") {
      setConfirmPassword(e.target.value);
      console.log("confirmPassword?", confirmPassword);
    }
  };

  // ! 서버에 업데이트 전송
  const handleUpdateBtn = async () => {
    if (newPassword === confirmPassword) {
      const updateBtn = await axios.post(
        "https://mayweather24.com/editprofile",
        {
          prevPassword,
          newPassword,
        },
        {
          withCredentials: true,
        }
      );
      console.log(
        "🚀 ~ file: ChangeUserPassword.js ~ line 46 ~ handleUpdateBtn ~ updateBtn",
        updateBtn
      );
      clickLogout();
      history.push("/");
    } else {
      setSameNewAsConfrim(false);
    }
  };

  return (
    <div>
      <NavContainer />
      <FakeSide />
      {isModalClicked ? <ModalContainer /> : null}
      {!isLoggedIn ? (
        <div>로그인 후 이용 가능</div>
      ) : (
        <div className="change_password_page">
          {/* // !title */}
          <div className="change_password_page_title">
            <div
              className="change_password_page_back_btn"
              onClick={handleGoBack}
            >
              x
            </div>
            <div className="change_password_page_title_value">
              Change Password
            </div>
          </div>
          {/* 이름 바꾸는 아래 네모칸 전체 */}
          <div className="change_password_page_box">
            {/* //! old Name box */}
            <div className="change_password_page_old_name_box">
              {/* //? Old name: */}
              <div className="change_password_page_old_name_box_title">
                Old name :
              </div>
              {/* //? input */}
              <div className="change_password_page_old_name_input_box">
                <input
                  className="change_password_page_old_name_input"
                  onChange={handleInputValue("prevPassword")}
                ></input>
              </div>
            </div>
            {/* //! New Name box */}
            <div className="change_password_page_new_name_box">
              {/* //? New : */}
              <div className="change_password_page_new_name_box_title">
                New name :
              </div>
              {/* //? input */}
              <div className="change_password_page_new_name_input_box">
                <input
                  className="change_password_page_new_name_input"
                  onChange={handleInputValue("newPassword")}
                ></input>
              </div>
            </div>
            {/* //! New Name box */}
            <div className="change_password_page_confirm_name_box">
              {/* //? Confirm : */}
              <div className="change_password_page_confirm_name_box_title">
                confirm name :
              </div>
              {/* //? input */}
              <div className="change_password_page_confirm_name_input_box">
                <input
                  className="change_password_page_confirm_name_input"
                  onChange={handleInputValue("confirmPassword")}
                ></input>
              </div>
            </div>
            {/* 유효성 검사 */}
            <div>
              {/* new === confrim */}
              {sameNewAsConfrim ? <div></div> : <div>new랑 confirm다름</div>}
            </div>
            {/* Update Btn */}
            <div className="change_password_page_update_div">
              <button
                className="change_password_page_update_btn"
                onClick={handleUpdateBtn}
              >
                Update
              </button>
            </div>
          </div>
          {/* //!  패스워드 변경 끝 */}
        </div>
      )}
    </div>
  );
};

export default withRouter(ChangeUserPassword);
