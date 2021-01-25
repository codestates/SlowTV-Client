import React, { useEffect } from "react";
// 비로그인 시
import LandingNavContainers from "../containers/LandingNavContainers";
// 로그인 시
import NavContainer from "../containers/NavContainer";
import ModalContainer from "../containers/ModalContainer";
import { Link, withRouter } from "react-router-dom";
import "./Landing.css";

const Landing = ({ history, isLoggedIn, isModalClicked, closeModal }) => {
  // ! 컨텐츠로 이동
  const handleGetStarted = () => {
    closeModal();
    history.push("/contents");
  };

  return (
    <div className="landing_page">
      {isLoggedIn ? <NavContainer /> : <LandingNavContainers />}
      {isModalClicked ? <ModalContainer /> : <div></div>}
      {/* body */}
      <div className="landing_page_container">
        <div className="landing_page_introduce_title">Find Your Calm</div>
        <div className="landing_page_introduce_body">
          Sleep more, Stress less, Live better.
        </div>
        <button className="btn" onClick={handleGetStarted}>
          Get started
        </button>
      </div>
    </div>
  );
};

export default withRouter(Landing);
