import React from "react";
import Side from "./Side";
import FakeNav from "./FakeNav";
import "./Contents.css";
import { fakeData } from "../Fakedata.js";

const Contents = ({ id, handleOnClick, history }) => {
  console.log("🚀 ~ file: Contents.js ~ line 9 ~ Contents ~ id>>>", id);

  return (
    <div className="category_page">
      <FakeNav />
      <Side />
      <div className="video_list">
        {/* thumbnail x 12 */}
        {/* 1 */}
        <div className="thumbnail1" onClick={handleOnClick}>
          <img
            className="thumbnail1_img"
            src={fakeData[0].snippet.thumbnails.default.url}
            value={fakeData[0].id}
            alt="undefined thumbnail"
          ></img>
        </div>
        {/* 2 */}
        <div className="thumbnail2">
          <img
            className="thumbnail1_img"
            src={fakeData[1].snippet.thumbnails.default.url}
            value={fakeData[1].id}
            alt="undefined thumbnail"
          ></img>
        </div>
        {/* 3 */}
        <div className="thumbnail3">
          <img
            className="thumbnail1_img"
            src={fakeData[2].snippet.thumbnails.default.url}
            value={fakeData[2].id}
            alt="undefined thumbnail"
          ></img>
        </div>
        {/* 4 */}
        <div className="thumbnail4">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail4_img"
          ></img>
        </div>
        {/* 5 */}
        <div className="thumbnail5">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail5_img"
          ></img>
        </div>
        {/* 6 */}
        <div className="thumbnail6">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail6_img"
          ></img>
        </div>
        {/* 7 */}
        <div className="thumbnail7">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail7_img"
          ></img>
        </div>
        {/* 8 */}
        <div className="thumbnail8">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail8_img"
          ></img>
        </div>
        {/* 9 */}
        <div className="thumbnail9">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail9_img"
          ></img>
        </div>
        {/* 10 */}
        <div className="thumbnail10">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail10_img"
          ></img>
        </div>
        {/* 11 */}
        <div className="thumbnail11">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail11_img"
          ></img>
        </div>
        {/* 12 */}
        <div className="thumbnail12">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail12_img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Contents;
