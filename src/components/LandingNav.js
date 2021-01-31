import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./LandingNav.css";

const LandingNav = ({ history, changeSignIn, changeSignUp }) => {
  const handleGoHome = () => {
    history.push("/");
  };
  return (
    <div className="landing_nav_page_navbar_page">
      <div className="landing_nav_page_navbar">
        <div className="landing_nav_page_navbar_text" onClick={handleGoHome}>
          <span className="landing_nav_page_navbar_Slow">Slow</span>
          <span className="landing_nav_page_navbar_TV">TV</span>
        </div>

        <Link to="login" className="landingNav_Link">
          <span className="landing_nav_page_Sign_Up" onClick={changeSignUp}>
            Sign Up
          </span>
        </Link>

        <Link to="login" className="landingNav_Link">
          <span className="landing_nav_page_Sign_In" onClick={changeSignIn}>
            Sign In
          </span>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(LandingNav);
