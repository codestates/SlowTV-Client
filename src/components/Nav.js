import React from "react";
import { Route } from "react-router-dom";
import "./Nav.css";
import logo from "../tvlogo.png";
import Login from "./Login"
import axios from "axios";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    }
  }

  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
  }

  handleLogout = () => {
    axios.post("https://server.slowtv24.com/logout", null,
      { withCredentials: true })
      .then((res) => {
        console.log("logout res>>>", res)
      })
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
            {this.props.isLoggedin === false ?
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
                  isLoggedin={this.props.isLoggedin}
                  handleResponseSuccess={this.props.handleResponseSuccess}
                  handleGetUserInfo={this.props.handleGetUserInfo}
                  email={this.props.email}
                  nickname={this.props.nickname}
                />
              </div>
              :
              <button onClick={this.handleLogout}>Logout</button>
            }
          </div>
        </div>
      </div>
    )
  };
};

export default Nav;
