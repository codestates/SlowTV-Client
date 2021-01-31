import React, { useState } from "react";

import { Link, withRouter } from "react-router-dom";

import "./Nav.css";
import user from "../img/user.png";
import user2 from "../img/user2.png";

const Nav = ({
  history,
  isLoggedIn,
  closeModal,
  handleOnClickModal,
  toggleModal,
}) => {
  const handleGoHome = () => {
    closeModal();
    history.push("/");
  };

  return (
    <div className="landing_nav_page_navbar_page">
      <div className="landing_nav_page_navbar">
        <div className="landing_nav_page_navbar_text" onClick={handleGoHome}>
          <span className="landing_nav_page_navbar_Slow">Slow</span>
          <span className="landing_nav_page_navbar_TV">TV</span>
        </div>

        {isLoggedIn ? (
          <span className="nav_page_icon_box" onClick={toggleModal}>
            <img className="nav_page_icon" src={user} alt="profile"></img>
          </span>
        ) : (
          <span className="nav_page_icon_box" onClick={toggleModal}>
            <img className="nav_page_icon" src={user} alt="profile"></img>
          </span>
        )}
      </div>
    </div>
  );
};

export default withRouter(Nav);
