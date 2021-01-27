import React from "react";
import { Route } from "react-router-dom";
import "./Nav.css";
import logo from "../tvlogo.png";
import Login from "./Login";
import Logout from "./Logout";
import axios from "axios";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  handleModalClose= () => {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <div className="navbar">
        <div className="nav-wrapper">
          <div className="nav-logo">
            <img src={logo} alt="logo" className="logo-img" />
            <span className="nav-head">SlowTV</span>
          </div>
          <div className="nav-btns">
            {this.props.isLoggedin === false ? (
              <div>
                <span className="nav-register-btn">Register</span>
                <button type="button" onClick={this.handleModalOpen}>Login</button>
                {/* <Login
                  isOpen={this.state.isModalOpen}
                  handleResponseSuccess={this.props.handleResponseSuccess}
                  handleLoggedin={this.props.handleLoggedin}
                /> */}
                <Login
                  isOpen={this.state.isModalOpen}
                  handleModalClose={this.handleModalClose}
                  handleResponseSuccess={this.props.handleResponseSuccess}
                  handleGetUserInfo={this.props.handleGetUserInfo}
                  isLoggedin={this.props.isLoggedin}
                  // handleLoggedin={props.handleLoggedin}
                  // handleGetUserInfoSocial={this.props.handleGetUserInfoSocial}
                  email={this.props.email}
                  nickname={this.props.nickname}
                />
              </div>
            ) : (
                <div>
                  <button
                    className="NavLogoutBTN"
                    onClick={this.props.handleLogoutModalOpen}
                  >
                    Logout
                </button>
                  <Logout
                    // open={this.props.isLoggedin}
                    open={this.props.isLogoutModalOpen}
                    handleLogoutModalClose={this.props.handleLogoutModalClose}
                    handleLogout={this.props.handleLogout}
                  ></Logout>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

