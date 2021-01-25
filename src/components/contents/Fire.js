import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import SideContainer from "../../containers/SideContainer";
import FakeSide from "../Fake/FakeSide";
import Nav from "../Nav";
import Modal from "./Modal";
// import ThumbnailsContainer from "../../containers/ThumbnailsContainer";
// import HamburgerContainer from "../../containers/SideContainer";
import "./Water.css";
import { fakeData } from "../Fake/Fakedata.js";

const Water = ({ id, handleOnClick, history, isClicked }) => {
  return (
    <div className="water_page">
      <Nav />
      <FakeSide />
      <Modal />
      <div className="water_page_container">
        <div className="water_page_small_size_lists">
          {/* thumbnail x 12 */}
          {/* 1 */}
          <div className="water_page_thumbnail_1">
            <img
              onClick={handleOnClick}
              className="water_page_thumbnail_img"
              src={fakeData[0].snippet.thumbnails.default.url}
              value={fakeData[0].id}
              alt="undefined thumbnail"
            ></img>
          </div>
          {/* 2 */}
          <div className="water_page_thumbnail_2">
            <img
              onClick={handleOnClick}
              className="water_page_thumbnail_img"
              src={fakeData[1].snippet.thumbnails.default.url}
              value={fakeData[1].id}
              alt="undefined thumbnail"
            ></img>
          </div>
          {/* 3 */}
          <div className="water_page_thumbnail_3">
            <img
              onClick={handleOnClick}
              src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
              alt="undefined thumbnail"
              className="water_page_thumbnail_img"
            ></img>
          </div>
          {/* 4 */}
          <div className="water_page_thumbnail_4">
            <img
              src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
              alt="undefined thumbnail"
              className="water_page_thumbnail_img"
            ></img>
          </div>
          {/* 5 */}
          <div className="water_page_thumbnail_5">
            <img
              src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
              alt="undefined thumbnail"
              className="water_page_thumbnail_img"
            ></img>
          </div>
          {/* 6 */}
          <div className="water_page_thumbnail_6">
            <img
              src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
              alt="undefined thumbnail"
              className="water_page_thumbnail_img"
            ></img>
          </div>
          {/* 7 */}
          <div className="water_page_thumbnail_7">
            <img
              src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
              alt="undefined thumbnail"
              className="water_page_thumbnail_img"
            ></img>
          </div>
          {/* 8 */}
          <div className="water_page_thumbnail_8">
            <img
              src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
              alt="undefined thumbnail"
              className="water_page_thumbnail_img"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Water);
