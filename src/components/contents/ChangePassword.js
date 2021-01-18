import React from "react";
import { Link, withRouter } from "react-router-dom";
import Side from "../Side";
import FakeNav from "../Fake/FakeNav";
import "./Profile.css";

const ChangePassword = ({ history }) => {
  const handleOnChangePage = () => {
    history.push("/contents/profile");
  };
  return (
    <div className="profile-page">
      <FakeNav />
      <Side />
      <div className="profile">
        <div className="change-password-btn">
          <button onClick={handleOnChangePage}>뒤로 가기 아이콘</button>
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
    </div>
  );
};

export default withRouter(ChangePassword);
