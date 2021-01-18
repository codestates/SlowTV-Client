import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./Landing.css";
import backgroundimg1 from "../backgrd1.jpg";
import backgroundimg2 from "../backgrd2.jpg";

const LandingPage = () => {
  return (
    <div className="landing_page">
      {/* <Nav /> */}
      <div>
        <div className="landing_home">
          {/* style={{ backgroundImage: `url(${backgroundimg1})` }} */}
          <div>
            <img
              src={backgroundimg1}
              alt="backgrdimg1"
              className="backgroundimg1"
            />
          </div>
          <Link className="start_link" to="/contents">
            Get Started
          </Link>
          {/* <div className="start_btn">Get Started!</div> 링크 or 디브 온클릭이벤트??*/}
        </div>
        <div className="landing_video1">맛보기 동영상1</div>
        <div className="landing_video1">맛보기 동영상2</div>
        <div
          className="landing_bottom"
          src={backgroundimg2}
          alt="backgrdimg2"
          className="backgroundimg2"
        >
          <Link className="start_link" to="/contents">
            Get Started
          </Link>
          {/* <div className="start_btn">Get Started!</div> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
