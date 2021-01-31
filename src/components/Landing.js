import React, { useEffect, useState } from "react";
import LandingNavContainers from "../containers/LandingNavContainers";
import NavContainer from "../containers/NavContainer";
import ModalContainer from "../containers/ModalContainer";
import { withRouter } from "react-router-dom";
import video1 from "../img/fireplace.mov";
import video2 from "../img/snowtown.mov";
import video3 from "../img/sunsetbeach.mov";
import "./Landing.css";
const Landing = ({
  history,
  isLoggedIn,
  isModalClicked,
  nickname,
  closeModal,
}) => {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function handleScrollR(num, position) {
    if (num < position) {
      return position;
    }
  }

  function handleScrollL(num, position) {
    if (num > position) {
      return position;
    }
  }
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
            <div
              className="landing_page_top_text_box_frist"
              style={{ transform: `translateY(${position / 12}px)` }}
            >
              Hi, {nickname}!
            </div>
            <div
              className="landing_page_top_text_box_second"
              style={{ transform: `translateY(${position / 12}px)` }}
            >
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
            <div
              className="landing_page_top_text_box_frist"
              style={{ transform: `translateY(${position / 12}px)` }}
            >
              Find your calm
            </div>
            <div
              className="landing_page_top_text_box_second"
              style={{ transform: `translateY(${position / 12}px)` }}
            >
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
            <div
              className="landing_page_middle_first_video_container_text_first_phrase"
              style={{ transform: `translateY(${position / 50}px)` }}
            >
              Sounds For Relaxing
            </div>
            <div className="landing_page_middle_first_video_container_text_second_phrase">
              Take a seat and listen <br /> to the crackling bonfire sounds.
            </div>
          </div>
          <video
            className="landing_page_middle_first_video_container_video"
            style={{
              transform: `translateX(${handleScrollR(
                20,
                -position / 4 + 150
              )}px)`,
            }}
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
            style={{
              transform: `translateX(${handleScrollL(
                -65,
                position / 2 - 400
              )}px)`,
            }}
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
          <div className="landing_page_middle_second_video_container">
            <div
              className="landing_page_middle_second_video_container_text"
              style={{ transform: `translateY(${position / 50}px)` }}
            >
              <div className="landing_page_middle_second_video_container_text_first_phrase">
                Non-stimulating video
              </div>
              <div className="landing_page_middle_second_video_container_text_second_phrase">
                Enjoy our exclusive collection <br />
                of nature videos.
              </div>
            </div>
          </div>
        </div>
        <div className="landing_page_middle_third_video_container">
          <div className="landing_page_middle_third_video_container_text">
            <div className="landing_page_middle_third_video_container_text_first_phrase">
              When you need a break
            </div>
            <div className="landing_page_middle_third_video_container_text_second_phrase">
              Watch anywhere, relax anytime
              <br />
              here on SlowTV.
            </div>
          </div>
          <video
            className="landing_page_middle_third_video_container_video"
            style={{
              transform: `translateX(${handleScrollR(
                15,
                -position / 3 + 400
              )}px)`,
            }}
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

      <div className="landing_page_bottom">
        <div className="landing_page_bottom_text_box">
          <div className="landing_page_bottom_text_div">
            <div className="landing_page_bottom_text_box_frist">
              Find your calm
            </div>
            <div
              className="landing_page_bottom_text_box_second"
              style={{ transform: `translateY(${position / 50}px)` }}
            >
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
