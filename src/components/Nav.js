import React from "react";
import { Route } from "react-router-dom";
import "./Nav.css";
import logo from "../tvlogo.png";
import Login from "./Login"

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
                <Login
                  isOpen={this.state.isModalOpen}
                  handleResponseSuccess={this.props.handleResponseSuccess}
                  handleLoggedin={this.props.handleLoggedin}
                />
              </div>
              :
              <button>Logout</button>
            }
          </div>
        </div>
      </div>
    )
  };
};

export default Nav;
