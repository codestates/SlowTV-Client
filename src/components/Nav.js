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
      {/* Slow TV logo */}
      <div className="landing_nav_page_navbar">
        <div className="landing_nav_page_navbar_text" onClick={handleGoHome}>
          <span className="landing_nav_page_navbar_Slow">Slow</span>
          <span className="landing_nav_page_navbar_TV">TV</span>
        </div>
        {/* 랜딩 페이지에서만 이거 나오고 렌딩 아니면 아이콘으로 대체, 너무 회원 유도 버튼이 있는게 페이지가 별로처럼 보임*/}
        {isLoggedIn ? (
          // {/* 로그인 했을 때 */}
          <span className="nav_page_icon_box" onClick={toggleModal}>
            <img className="nav_page_icon" src={user} alt="profile"></img>
          </span>
        ) : (
          // {/* 로그인 안 했을 때 */}
          <span className="nav_page_icon_box" onClick={toggleModal}>
            <img className="nav_page_icon" src={user} alt="profile"></img>
          </span>
        )}
      </div>
    </div>
  );
};

export default withRouter(Nav);
