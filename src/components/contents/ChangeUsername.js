import React from "react";
import { Link, withRouter } from "react-router-dom";
import Side from "../Side";
import FakeNav from "../FakeNav";
import "./Profile.css";

const ChangeUsername = ({ history }) => {
  const handleOnChangePage = () => {
    history.push("/contents/profile");
  };
  return (
    <div className="profile-page">
      <FakeNav />
      <Side />
      <div className="profile">
        <div>
          <div className="change-name-btn">
            <button onClick={handleOnChangePage}>뒤로 가기 아이콘</button>
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
      </div>
    </div>
  );
};

export default withRouter(ChangeUsername);
