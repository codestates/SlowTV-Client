import React, { useEffect } from "react";
// 비로그인 시
import LandingNavContainers from "../containers/LandingNavContainers";
// 로그인 시
import NavContainer from "../containers/NavContainer";
import ModalContainer from "../containers/ModalContainer";
import { Link, withRouter } from "react-router-dom";
import "./Landing.css";
import testVideo from "../img/test.mp4";
import test2 from "../img/test2.mp4";

const Landing = ({
  history,
  isLoggedIn,
  isModalClicked,
  nickname,
  closeModal,
}) => {
  // ! Get Started 버튼 : 컨텐츠로 이동
  const handleGetStarted = () => {
    closeModal();
    history.push("/contents");
  };

  return (
    <div className="landing_page">
      {isLoggedIn ? <NavContainer /> : <LandingNavContainers />}
      {isModalClicked ? <ModalContainer /> : <div></div>}
      {/* body */}
      {nickname ? (
        <div className="landing_page_container">
          <div className="landing_page_introduce_title">Hi {nickname}</div>
          <div className="landing_page_introduce_body">
            유저인 경우 소개말 다르게
          </div>
          <button className="btn" onClick={handleGetStarted}>
            Get started
          </button>
        </div>
      ) : (
        <div className="landing_page_container">
          <div className="landing_page_introduce_title">Find Your Calm</div>
          <div className="landing_page_introduce_body">
            If you're tired of your busy daily life, Feel the aesthetics of
            slowness for a moment.
          </div>
          <button className="btn" onClick={handleGetStarted}>
            Get started
          </button>
          {/* <video autoPlay loop muted>
            <source src={test2} type="video/mp4"></source>
            <source
              type="video/mp4"
            ></source>
          </video> */}
        </div>
      )}
    </div>
  );
};

export default withRouter(Landing);
