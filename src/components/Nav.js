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
          <span className="nav-login-btn">Login</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
