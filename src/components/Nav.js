//import React, { Component } from "react";
import React from "react";
// import { Link, withRouter } from "react-router-dom";
import "./Nav.css";
import logo from "../tvlogo.png";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <img src={logo} alt="logo" className="logo-img" />
          <span className="nav-head">SlowTV</span>
        </div>
        <div className="nav-btns">
          <span className="nav-register-btn">Register</span>
          < className="nav-login-btn" onClick={() => setIsModalShow(true)}>Login</button>
        {/* <button className="nav-login-btn" onClick={() => setIsModalShow(true)}>Login</button> */}
      </div>
//       <nav>
//         <ul className="nav-ul">
//           <li className="nav-li">slowTV</li>
//           {/* 모달로 열려야함. */}
//           <li className="nav-li">
//             <div>Register</div>
//           </li>
//           <li className="nav-li">
//             {/* 로그인상태에 따라서?<div>Logout</div> */}
//             <div>Login</div>
//           </li>
//         </ul>
//       </nav>
    </div>
    </div >
  );
};

export default Nav;
