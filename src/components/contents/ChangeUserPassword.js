import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import NavContainer from "../../containers/NavContainer";
import SideRemoteControlContainer from "../../containers/SideRemoteControlContainer";
import ModalContainer from "../../containers/ModalContainer";
import "./ChangeUserPassword.css";
import cancel from "../../img/cancel.png";
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

  //
  const handleGoBack = () => {
    history.goBack();
  };

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

  const handleUpdateBtn = async () => {
    if (newPassword === confirmPassword) {
      const updateBtn = await axios.post(
        "https://server.slowtv24.com/edit-profile",
        {
          prevPassword,
          newPassword,
        },
        {
          withCredentials: true,
        }
      );
      clickLogout();
      window.location.assign("https://localhost:3000");
    } else {
      setSameNewAsConfrim(false);
    }
  };

  return (
    <div className="change_password_page">
      <NavContainer />
      <SideRemoteControlContainer />
      {isModalClicked ? <ModalContainer /> : null}
      {!isLoggedIn ? (
        <div>로그인 후 이용 가능</div>
      ) : (
        <div className="change_password_page_container">
          <div className="change_password_page_title">
            <div
              className="change_password_page_back_btn"
              onClick={handleGoBack}
            >
              <img
                className="change_password_page_back_btn_icon"
                src={cancel}
                alt="cancel"
              ></img>
            </div>
            <div className="change_password_page_title_value">
              Change Password
            </div>
          </div>
          <div className="change_password_page_box">
            <div className="change_password_page_old_name_box">
              <div className="change_password_page_old_name_box_title">
                Old Password :
              </div>

              <div className="change_password_page_old_name_input_box">
                <input
                  className="change_password_page_old_name_input"
                  autoFocus="on"
                  onChange={handleInputValue("prevPassword")}
                  type="password"
                ></input>
              </div>
            </div>
            <div className="change_password_page_new_name_box">
              <div className="change_password_page_new_name_box_title">
                New Password :
              </div>
              <div className="change_password_page_new_name_input_box">
                <input
                  className="change_password_page_new_name_input"
                  onChange={handleInputValue("newPassword")}
                  type="password"
                ></input>
              </div>
            </div>
            <div className="change_password_page_confirm_name_box">
              <div className="change_password_page_confirm_name_box_title">
                Confirm Password :
              </div>
              <div className="change_password_page_confirm_name_input_box">
                <input
                  className="change_password_page_confirm_name_input"
                  onChange={handleInputValue("confirmPassword")}
                  type="password"
                ></input>
              </div>
            </div>
            <div>
              {sameNewAsConfrim ? <div></div> : <div>new랑 confirm다름</div>}
            </div>
            <div className="change_password_page_update_div">
              <button
                className="change_password_page_update_btn"
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

export default withRouter(ChangeUserPassword);
