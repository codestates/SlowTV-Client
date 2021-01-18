import React from "react";
import Side from "../Side";
// import FakeNav from "../FakeNav";
import Hmaburger from "../test_ver/Hamburger.js";
import "./Water.css";
import { fakeData } from "../Fake/Fakedata.js";

const Contents = ({ id, handleOnClick, history }) => {
  // console.log("🚀 ~ file: Contents.js ~ line 9 ~ Contents ~ id>>>", id);

  return (
    <div className="water-page">
      {/* <FakeNav /> */}
      <Side />
      {/* <Hmaburger /> */}
      <div className="water-list">
        {/* thumbnail x 12 */}
        {/* 1 */}
        <div className="thumbnail-1" onClick={handleOnClick}>
          <img
            className="thumbnail-img"
            src={fakeData[0].snippet.thumbnails.default.url}
            value={fakeData[0].id}
            alt="undefined thumbnail"
          ></img>
        </div>
        {/* 2 */}
        <div className="thumbnail-2">
          <img
            className="thumbnail-img"
            src={fakeData[1].snippet.thumbnails.default.url}
            value={fakeData[1].id}
            alt="undefined thumbnail"
          ></img>
        </div>
        {/* 3 */}
        <div className="thumbnail-3">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 4 */}
        <div className="thumbnail-4">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 5 */}
        <div className="thumbnail-5">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 6 */}
        <div className="thumbnail-6">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 7 */}
        <div className="thumbnail-7">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 8 */}
        <div className="thumbnail-8">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 9 */}
        <div className="thumbnail-9">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 10 */}
        <div className="thumbnail-10">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 11 */}
        <div className="thumbnail-11">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 12 */}
        <div className="thumbnail-12">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 13 */}
        <div className="thumbnail-13">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 14 */}
        <div className="thumbnail-14">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 15 */}
        <div className="thumbnail-15">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 16 */}
        <div className="thumbnail-16">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 17 */}
        <div className="thumbnail-17">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 18 */}
        <div className="thumbnail-18">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 19 */}
        <div className="thumbnail-19">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 20 */}
        <div className="thumbnail-20">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
        {/* 21 */}
        <div className="thumbnail-21">
          <img
            src="https://assets.calm.com/216x256/e1da5ca063ef45cdf7e5a674799ad01d.jpeg"
            alt="undefined thumbnail"
            className="thumbnail-img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Contents;
