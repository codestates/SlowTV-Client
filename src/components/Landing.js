import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./Landing.css";

const LandingPage = () => {
  return (
    <div className="landing-page">

      <div className="nav-container">
        <div className="overlay">
          <Nav />
          <Link className="start-link" to="/contents">
            Get Started
          </Link>
          <div className="inner">
            <h2 className="msg-title">Hi, slow!</h2>
            <h3 className="msg-intro1">Exclusive collection of nature videos</h3>
            <h3 className="msg-intro2">Watch anywhere. Relax anytime.</h3>
          </div>
        </div>
      </div>

      <div className="landing-home">
        <div></div>
      </div>

      <div className="landing-middle">
        {/* <LandingVideos /> */}
        <video className="landing-video1"></video>
      </div>

      <div className="landing-bottom">
        <div ></div>
      </div>

    </div >
  );
};

// const LandingVideos = () => {
//   return (
//     <div className="landing_video">
//       <video>video</video>
//     </div>
//   )
// }

export default LandingPage;


//export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
// export default connect(mapStateToProps 리덕스 state값 연결, mapDispatchToProps 액션 생성 함수 연결)(ProfileContainer);

