import React, { useState } from "react";

import { Link, withRouter } from "react-router-dom";

import "./Nav.css";

const Nav = ({ history, isLoggedIn, handleOnClickModal }) => {
  // console.log(
  //   "🚀 ~ file: Nav.js ~ line 8 ~ Nav ~ handleOnClickModal",
  //   handleOnClickModal
  // );
  // console.log("🚀 ~ file: Nav.js ~ line 8 ~ Nav ~ isLoggedIn", isLoggedIn);
  const handleGoHome = () => {
    history.push("/");
  };

  return (
    <div className="nav_page">
      <div className="nav_page_navbar">
        {/* Slow TV logo */}
        <span className="nav_page_logo" onClick={handleGoHome}>
          SLOW<span className="nav_page_tv_in_logo">TV</span>
        </span>
        {/* 랜딩 페이지에서만 이거 나오고 렌딩 아니면 아이콘으로 대체, 너무 회원 유도 버튼이 있는게 페이지가 별로처럼 보임*/}
        {isLoggedIn ? (
          // {/* 로그인 했을 때 */}
          <span className="nav_page_icon" onClick={handleOnClickModal}>
            로그인 ㅇ 아이콘 ( 기능 : 프로필 보여줌 )
          </span>
        ) : (
          // {/* 로그인 안 했을 때 */}
          <span className="nav_page_icon" onClick={handleOnClickModal}>
            로그인 x 아이콘 ( 기능 : 로그인 버튼 모달 창)
          </span>
        )}
      </div>
    </div>
  );
};

export default withRouter(Nav);
