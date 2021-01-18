import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="login-half left">
          <form>
            <input type="text" placeholder="Enter email address" />
            <input type="password" placeholder="Enter password" />
            <button>Login</button>
          </form>
        </div>
        <div className="bar bar-top"></div>
        <span className="login-or">OR</span>
        <div className="bar bar-bottom"></div>
        <div className="login-half right">
          <button>Login with GitHub</button>
          <button>Login with Gmail</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
