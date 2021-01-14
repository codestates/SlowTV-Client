import React from "react";
import Side from "./Side";
import FakeNav from "./FakeNav";
import "./Contents.css";

const Contents = () => {
  // 썸네일 버튼 누르면 watch 페이지 이동해서 영상만 재생함
  // 위 기능을 함수화시켜서 어떤 영상을 클릭하냐에 따라 재생하는 영상만 바뀌게끔 만들기

  const handleOnClick = (e) => {
    console.log("🚀 hadleOnClick");
  };

  return (
    <div className="category_page">
      {/* FakeNav.js에서 따로 만듦. */}
      <FakeNav />
      <Side />

      <div className="video_list">
        {/* thumbnail x 12 */}
        {/* 1 */}
        <div className="thumbnail1" onClick={handleOnClick}>
          <img
            src="https://assets.calm.com/216x256/e3ff67fe3942fb85c902709d87ad4e8e.jpeg"
            alt="undefined thumbnail"
            className="thumbnail1_img"
          ></img>
        </div>
        {/* 2 */}
        <div className="thumbnail2">
          <img
            src="https://assets.calm.com/216x256/e3ff67fe3942fb85c902709d87ad4e8e.jpeg"
            alt="undefined thumbnail"
            className="thumbnail2_img"
          ></img>
        </div>
        {/* 3 */}
        <div className="thumbnail3">
          <img
            src="https://assets.calm.com/216x256/e3ff67fe3942fb85c902709d87ad4e8e.jpeg"
            alt="undefined thumbnail"
            className="thumbnail3_img"
          ></img>
        </div>
        {/* 4 */}
        <div className="thumbnail4">
          <img
            src="https://assets.calm.com/216x256/e3ff67fe3942fb85c902709d87ad4e8e.jpeg"
            alt="undefined thumbnail"
            className="thumbnail4_img"
          ></img>
        </div>
        {/* 5 */}
        <div className="thumbnail5">
          <img
            src="https://assets.calm.com/216x256/e3ff67fe3942fb85c902709d87ad4e8e.jpeg"
            alt="undefined thumbnail"
            className="thumbnail5_img"
          ></img>
        </div>
        {/* 6 */}
        <div className="thumbnail6">
          <img
            src="https://assets.calm.com/216x256/e3ff67fe3942fb85c902709d87ad4e8e.jpeg"
            alt="undefined thumbnail"
            className="thumbnail6_img"
          ></img>
        </div>
        {/* 7 */}
        <div className="thumbnail7">
          <img
            src="https://assets.calm.com/216x256/e3ff67fe3942fb85c902709d87ad4e8e.jpeg"
            alt="undefined thumbnail"
            className="thumbnail7_img"
          ></img>
        </div>
        {/* 8 */}
        <div className="thumbnail8">
          <img
            src="https://assets.calm.com/216x256/e3ff67fe3942fb85c902709d87ad4e8e.jpeg"
            alt="undefined thumbnail"
            className="thumbnail8_img"
          ></img>
        </div>
        {/* 9 */}
        <div className="thumbnail9">
          <img
            src="https://assets.calm.com/216x256/e3ff67fe3942fb85c902709d87ad4e8e.jpeg"
            alt="undefined thumbnail"
            className="thumbnail9_img"
          ></img>
        </div>
        {/* 10 */}
        <div className="thumbnail10">
          <img
            src="https://assets.calm.com/216x256/e3ff67fe3942fb85c902709d87ad4e8e.jpeg"
            alt="undefined thumbnail"
            className="thumbnail10_img"
          ></img>
        </div>
        {/* 11 */}
        <div className="thumbnail11">
          <img
            src="https://assets.calm.com/216x256/e3ff67fe3942fb85c902709d87ad4e8e.jpeg"
            alt="undefined thumbnail"
            className="thumbnail11_img"
          ></img>
        </div>
        {/* 12 */}
        <div className="thumbnail12">
          <img
            src="https://assets.calm.com/216x256/e3ff67fe3942fb85c902709d87ad4e8e.jpeg"
            alt="undefined thumbnail"
            className="thumbnail12_img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Contents;
