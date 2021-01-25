import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./Landing.css";

const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <div className="nav-container">
        <div className="overlay">
          <Nav
            handleResponseSuccess={props.handleResponseSuccess}
            handleLogout={props.handleLogout}
            isLoggedin={props.isLoggedin}
            handleLogoutModalOpen={props.handleLogoutModalOpen}
            handleLogoutModalClose={props.handleLogoutModalClose}
            isLogoutModalOpen={props.isLogoutModalOpen}
          />
          <>
            <Link className="start-link" to="/contents">
              Get Started
            </Link>
            <div className="inner">
              <h2 className="msg-title">Hi, slow!</h2>
              <h3 className="msg-intro1">
                Exclusive collection of nature videos
              </h3>
              <h3 className="msg-intro2">Watch anywhere. Relax anytime.</h3>
            </div>
          </>
        </div>
      </div>

      <div className="landing-home">
        <div></div>
      </div>

      <div className="landing-middle">
        <div className="video1-container">
          <div className="video1-text">
            Enjoy in your room, listening to the sound of waves and the relaxing
            crackling bonfire sounds.
          </div>
          <iframe
            className="video1"
            src="https://drive.google.com/file/d/1a1o7aFcOYbnROTmSHjdYvG6Ii5HLh3Mw/preview"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            title="video"
          />
        </div>
        <div className="video2-container">
          <iframe
            className="video2"
            src="https://drive.google.com/file/d/1a1o7aFcOYbnROTmSHjdYvG6Ii5HLh3Mw/preview"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            title="video"
          />
          <div className="video2-text">
            What do you listen to on the way to work every morning?
          </div>
        </div>
        <div className="video3-container">
          <div className="video2-text">
            What do you listen to on the way to work every morning?
          </div>
          <iframe
            className="video3"
            src="https://drive.google.com/file/d/1a1o7aFcOYbnROTmSHjdYvG6Ii5HLh3Mw/preview"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            title="video"
          />
        </div>

        {/* <LandingVideos />
        <video className="landing-video1"></video> */}
      </div>

      <div className="landing-bottom">
        <div></div>
      </div>
    </div>
  );
};

// const LandingVideos = () => {
//   return (
//     <div className="landing_video">
//       <video src="https://drive.google.com/file/d/1a1o7aFcOYbnROTmSHjdYvG6Ii5HLh3Mw/preview" type="video/mp4" />
//     </div>
//   )
// }

export default LandingPage;

//export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
// export default connect(mapStateToProps 리덕스 state값 연결, mapDispatchToProps 액션 생성 함수 연결)(ProfileContainer);

