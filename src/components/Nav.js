import React from "react";
// import { Link, withRouter } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>slowTV</li>
          {/* 모달로 열려야함. */}
          <li>
            <div>Register</div>
          </li>
          <li>
            {/* 로그인상태에 따라서?<div>Logout</div> */}
            <div>Login</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
