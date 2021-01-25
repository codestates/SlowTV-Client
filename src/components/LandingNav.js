import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./LandingNav.css";

const LandingNav = ({ history, changeSignIn, changeSignUp }) => {
  const handleGoHome = () => {
    history.push("/");
  };
  return (
    <div className="landing_nav_page_navbar">
      {/* Slow TV logo */}
      <span className="landing_nav_page_logo" onClick={handleGoHome}>
        SLOW<span className="landing_nav_page_tv_in_logo">TV</span>
      </span>
      {/* Sign Up */}
      <Link to="login">
        <span className="landing_nav_page_Sign_Up" onClick={changeSignUp}>
          Sign Up
        </span>
      </Link>
      {/* Sign In */}
      <Link to="login">
        <span className="landing_nav_page_Sign_In" onClick={changeSignIn}>
          Sign In
        </span>
      </Link>
    </div>
  );
};

export default withRouter(LandingNav);
