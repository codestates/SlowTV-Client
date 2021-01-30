import React from "react";
import LandingNavContainers from "../containers/LandingNavContainers";
import NavContainer from "../containers/NavContainer";
import ModalContainer from "../containers/ModalContainer";
import { withRouter } from "react-router-dom";
import video1 from "../img/fireplace.mov";
import video2 from "../img/snowtown.mov";
import video3 from "../img/sunsetbeach.mov";
import backgrd1 from "../img/backgrd1.jpg";
import "./Landing.css";

const Landing = ({
  history,
  isLoggedIn,
  isModalClicked,
  nickname,
  closeModal,
}) => {
  const handleGetStarted = () => {
    closeModal();
    history.push("/contents");
  };

  return (
    <div className="landing_page">
      <div className="landing_page_top">
        {isLoggedIn ? <NavContainer /> : <LandingNavContainers />}
        {isModalClicked ? <ModalContainer /> : <div></div>}
        {nickname ? (
          <div className="landing_page_top_text_box">
            <div className="landing_page_top_text_box_frist">
              Hi, {nickname}!
            </div>
            <div className="landing_page_top_text_box_second">
              Welcome Back to SlowTV
            </div>
            <button
              className="landing_page_top_text_box_third"
              onClick={handleGetStarted}
            >
              Get started
            </button>
          </div>
        ) : (
          <div className="landing_page_top_text_box">
            <div className="landing_page_top_text_box_frist">
              Find your calm
            </div>
            <div className="landing_page_top_text_box_second">
              Experience the aesthetics of slowness for a moment.
            </div>

            <button
              className="landing_page_top_text_box_third"
              onClick={handleGetStarted}
            >
              Get started
            </button>
          </div>
        )}
      </div>
      <div className="landing_page_middle">
        <div className="landing_page_middle_first_video_container">
          <div className="landing_page_middle_first_video_container_text">
            <div className="landing_page_middle_first_video_container_text_first_verb">
              Fire Fire Fire Fire
            </div>
            Take a seat and listen to the crackling <br />
            bonfire sounds.
          </div>
          <video
            className="landing_page_middle_first_video_container_video"
            autoPlay
            muted
            loop
          >
            <source
              src={video1}
              type="video/mp4"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              title="video"
            />
          </video>
        </div>
        <div className="landing_page_middle_second_video_container">
          <video
            className="landing_page_middle_second_video_container_video"
            autoPlay
            muted
            loop
          >
            <source
              src={video2}
              type="video/mp4"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              title="video"
            />
          </video>
          <div className="landing_page_middle_second_video_container_text">
            Enjoy our exclusive collection of nature videos.
          </div>
        </div>
        <div className="landing_page_middle_third_video_container">
          <div className="landing_page_middle_third_video_container_text">
            Watch anywhere, relax anytime here on SlowTV.
          </div>
          <video
            className="landing_page_middle_third_video_container_video"
            autoPlay
            muted
            loop
          >
            <source
              src={video3}
              type="video/mp4"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              title="video"
            />
          </video>
        </div>
      </div>
      {/* //! bottom */}
      <div
        className={
          isLoggedIn ? "landing_page_bottom_none" : "landing_page_bottom"
        }
      >
        <div className="landing_page_bottom_text_box">
          <div className="landing_page_bottom_text_div">
            <div className="landing_page_bottom_text_box_frist">
              Find your calm
            </div>
            <div className="landing_page_bottom_text_box_second">
              Experience the aesthetics of slowness for a moment.
            </div>
          </div>

          <button
            className="landing_page_bottom_text_box_third"
            onClick={handleGetStarted}
          >
            Get started
          </button>
        </div>
        <div className="landing_page_bottom_footer">
          Copyright © 2021 YouTube. All rights reserved
        </div>
      </div>
    </div>
  );
};
export default withRouter(Landing);
