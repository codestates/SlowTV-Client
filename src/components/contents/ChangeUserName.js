import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import NavContainer from "../../containers/NavContainer";
import SideRemoteControlContainer from "../../containers/SideRemoteControlContainer";
import ModalContainer from "../../containers/ModalContainer";
import cancel from "../../img/cancel.png";
import axios from "axios";
import "./ChangeUserName.css";

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
      const updateName = await axios.post(
        "https://server.slowtv24.com/edit-profile",
        {
          nickname: newName,
        },
        {
          withCredentials: true,
        }
      );
      changeNickName(updateName.data.updateSuccess.nickname);
      history.goBack();
    } else {
      alert("Please log in and use it.");
    }
  };

  return (
    <div className="change_name_page">
      <NavContainer />
      <SideRemoteControlContainer />
      {isModalClicked ? <ModalContainer /> : <div></div>}
      {!isLoggedIn ? (
        <div>go login</div>
      ) : (
        <div className="change_name_page_container">
          <div className="change_name_page_title">
            <div className="change_name_page_back_btn" onClick={handleGoBack}>
              <img
                className="change_name_page_back_btn_icon"
                src={cancel}
                alt="cancel"
              ></img>
            </div>
            <div className="change_name_page_title_value">Change Name</div>
          </div>

          <div className="change_name_page_box">
            <div className="change_name_page_current_name_box">
              <div className="change_name_page_current_name_box_title">
                Current name :
              </div>
              <div className="change_name_page_current_name_value">
                {nickname}
              </div>
            </div>
            <div className="change_name_page_new_name_box">
              <div className="change_name_page_new_name_box_title">
                New name :
              </div>

              <div className="change_name_page_new_name_input_box">
                <input
                  className="change_name_page_new_name_input"
                  onChange={handleInputValue}
                ></input>
              </div>
            </div>

            <div className="change_name_page_update_div">
              <button
                className="change_name_page_update_btn"
                onClick={handleUpdateBtn}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(ChangeUserName);
