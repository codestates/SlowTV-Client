import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.css";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    // this.githubLoginHandler = this.githubLoginHandler(this);
    // this.GITHUB_LOGIN_URL =
    //   "https://github.com/login/oauth/authorize?client_id=value";
  }

  // githubLoginHandler() {
  //   window.location.assign(this.GITHUB_LOGIN_URL);
  // }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    if (!this.state.email || !this.state.password) {
      this.setState({
        errorMessage: "Please check your email and password again.",
      });
    } else {
      axios
        .post(
          "https://server.slowtv24.com/login",
          { email: email, password: password },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("login post res>>>", res);
          this.setState({
            isLoggedin: true,
          });
          this.props.handleResponseSuccess();
          this.props.history.push("/contents");
        });
    }
  };

  render() {
    return (
      <div>
        {this.props.isOpen === false ? (
          <></>
        ) : (
          <div>
            <div className="login">
              <div className="login-half left">
                <input
                  type="text"
                  placeholder="Enter email address"
                  onChange={this.handleInputValue("email")}
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  onChange={this.handleInputValue("password")}
                />
                <button type="button" onClick={this.handleLogin}>
                  Login
                </button>
              </div>
              {/* <span className="bar bar-top"></span> */}
              <span className="login-or">OR</span>
              {/* <span className="bar bar-bottom"></span> */}
              <div className="login-half right">
                <button>Login with GitHub</button>
                <button>Login with Gmail</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Login);
