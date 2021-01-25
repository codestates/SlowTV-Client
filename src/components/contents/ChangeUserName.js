import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import NavContainer from "../../containers/NavContainer";
import ModalContainer from "../../containers/ModalContainer";
import "./ChangeUserName.css";
import axios from "axios";
import FakeSideContainer from "../../containers/FakeSideContainer";

const ChangeUserName = ({
  history,
  nickname,
  changeNickName,
  isLoggedIn,
  isModalClicked,
}) => {
  const [newName, setNewName] = useState("");

  const handleGoBack = () => {
    history.goBack();
  };

  const handleInputValue = async (e) => {
    console.log(e.target.value);
    let inputNewName = e.target.value;
    setNewName(inputNewName);
  };

  const handleUpdateBtn = async () => {
    if (isLoggedIn === true) {
      console.log(
        "🚀 ~ file: ChangeUserName.js ~ line 48 ~ handleUpdateBtn ~ newName",
        newName
      );
      const updateName = await axios.post(
        "https://mayweather24.com/edit-profile",
        // "https://server.slowtv24.com/editprofile",
        {
          nickname: newName,
          // email: null,
          // password: null,
        },
        {
          withCredentials: true,
        }
      );
      console.log(
        "🚀 ~ file: ChangeUserName.js ~ line 25 ~ handleInputValue ~ updateName",
        updateName.data.updateSuccess.nickname
      );
      changeNickName(updateName.data.updateSuccess.nickname);
      history.goBack();
    } else {
      alert("Please log in and use it.");
    }
  };

  return (
    <div>
      <NavContainer />
      <FakeSideContainer />
      {isModalClicked ? <ModalContainer /> : <div></div>}
      {!isLoggedIn ? (
        <div>go login</div>
      ) : (
        <div className="change_name_page">
          {/* // !title */}
          <div className="change_name_page_title">
            <div className="change_name_page_back_btn" onClick={handleGoBack}>
              x
            </div>
            <div className="change_name_page_title_value">Change Name</div>
          </div>
          {/* 이름 바꾸는 아래 네모칸 전체 */}
          <div className="change_name_page_box">
            {/* //! Current Name box  */}
            <div className="change_name_page_current_name_box">
              {/* //? current name: */}
              <div className="change_name_page_current_name_box_title">
                Current name :
              </div>
              {/* //? current name value */}
              <div className="change_name_page_current_name_value">
                {nickname}
              </div>
            </div>
            {/* //! New Name box */}
            <div className="change_name_page_new_name_box">
              {/* //? Old name: */}
              <div className="change_name_page_new_name_box_title">
                New name :
              </div>
              {/* //? input */}
              <div className="change_name_page_new_name_input_box">
                <input
                  className="change_name_page_new_name_input"
                  onChange={handleInputValue}
                ></input>
              </div>
            </div>
            {/* Update Btn */}
            <div className="change_name_page_update_div">
              <button
                className="change_name_page_update_btn"
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

export default withRouter(ChangeUserName);
