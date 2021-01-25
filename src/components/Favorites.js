import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
// import SideContainer from "../../containers/SideContainer";
import FakeSideContainer from "../containers/FakeSideContainer";
import NavContainer from "../containers/NavContainer";
import ModalContainer from "../containers/ModalContainer";
// import ThumbnailsContainer from "../../containers/ThumbnailsContainer";
// import HamburgerContainer from "../../containers/SideContainer";
import "../components/contents/Water.css";

// import { ICON_NAME } from "react-icons/TYPE
// 즐겨찾기 전 손가락, 별 둘 둥 하나 선택
import { AiOutlineLike } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
// 즐겨찾기 후
import { AiFillLike } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";

const Favorites = ({
  id,
  handleOnClick,
  history,
  isClicked,
  isModalClicked,
  // handleOnClickModal,
  videoData,
  clickThumbnail,
  addFavorites,
  isAddFavoirtes,
  isLoggedIn,
}) => {
  console.log("🚀 ~ file: Favorites.js ~ line 31 ~ videoData", videoData);
  // ! 썸네일 클릭 시 비디오 아이디 구하기 -> 비디오 플레이어에서 해당 아이디 영상 재생
  const getVideoId = (e) => {
    const id = e.target.attributes.value.value;
    console.log("🚀 ~ file: Water.js ~ line 36 ~ getVideoId ~ id", id);
    clickThumbnail(id);
  };
  return (
    <div className="water_page">
      {!videoData ? (
        isLoggedIn ? (
          <div className="loaded_water_page">
            <NavContainer />
            <FakeSideContainer />
            {isModalClicked ? <ModalContainer /> : <div></div>}
            <div>아직 추가한 즐겨찾기가 없습니다.</div>
          </div>
        ) : (
          <div className="loaded_water_page">
            <NavContainer />
            <FakeSideContainer />
            {isModalClicked ? <ModalContainer /> : <div></div>}
            <div>로그인 후 이용해 주세요.</div>
          </div>
        )
      ) : (
        <div className="loaded_water_page">
          {/* <Nav /> */}
          <NavContainer />
          <FakeSideContainer />
          {isModalClicked ? <ModalContainer /> : <div></div>}
          {/* 썸네일 컨테이너 */}
          <div className="water_page_container">
            <div className="water_page_small_size_lists">
              {/* thumbnail x 12 */}
              {/* 1 */}
              <div className="water_page_thumbnail_1">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[0].id}
                  onClick={getVideoId}
                >
                  <button className="water_page_thumbnail__btn">
                    {videoData[0].isFavorite ? (
                      <AiFillLike className="water_page_thumbnail__btn_icon" />
                    ) : (
                      <AiOutlineLike className="water_page_thumbnail__btn_icon" />
                    )}
                  </button>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[0].thumbnail}
                  alt="undefined thumbnail"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  // onClick={getVideoId}
                  // value={videoData[0].id}
                ></img>
              </div>
              {/* 2 */}
              <div className="water_page_thumbnail_2">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[1].id}
                  onClick={getVideoId}
                >
                  <button className="water_page_thumbnail__btn">
                    {videoData[1].isFavorite ? (
                      <AiFillLike className="water_page_thumbnail__btn_icon" />
                    ) : (
                      <AiOutlineLike className="water_page_thumbnail__btn_icon" />
                    )}
                  </button>
                </div>
                <img
                  alt="undefined thumbnail"
                  className="water_page_thumbnail_img"
                  src={videoData[1].thumbnail}
                  // onClick={getVideoId}
                  // value={videoData[1].id}
                ></img>
              </div>
              {/* 3 */}
              <div className="water_page_thumbnail_3">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[2].id}
                  onClick={getVideoId}
                >
                  <button className="water_page_thumbnail__btn">
                    {videoData[2].isFavorite ? (
                      <AiFillLike className="water_page_thumbnail__btn_icon" />
                    ) : (
                      <AiOutlineLike className="water_page_thumbnail__btn_icon" />
                    )}
                  </button>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[2].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoId}
                  // value={videoData[2].id}
                ></img>
              </div>
              {/* 4 */}
              <div className="water_page_thumbnail_4">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[3].id}
                  onClick={getVideoId}
                >
                  <button className="water_page_thumbnail__btn">
                    {videoData[3].isFavorite ? (
                      <AiFillLike className="water_page_thumbnail__btn_icon" />
                    ) : (
                      <AiOutlineLike className="water_page_thumbnail__btn_icon" />
                    )}
                  </button>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[3].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoId}
                  // value={videoData[3].id}
                ></img>
              </div>
              {/* 5 */}
              <div className="water_page_thumbnail_5">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[4].id}
                  onClick={getVideoId}
                >
                  <button className="water_page_thumbnail__btn">
                    {videoData[4].isFavorite ? (
                      <AiFillLike className="water_page_thumbnail__btn_icon" />
                    ) : (
                      <AiOutlineLike className="water_page_thumbnail__btn_icon" />
                    )}
                  </button>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[4].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoId}
                  // value={videoData[4].id}
                ></img>
              </div>
              {/* 6 */}
              <div className="water_page_thumbnail_6">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[5].id}
                  onClick={getVideoId}
                >
                  <button className="water_page_thumbnail__btn">
                    {videoData[5].isFavorite ? (
                      <AiFillLike className="water_page_thumbnail__btn_icon" />
                    ) : (
                      <AiOutlineLike className="water_page_thumbnail__btn_icon" />
                    )}
                  </button>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[5].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoId}
                  // value={videoData[5].id}
                ></img>
              </div>
              {/* 7 */}
              <div className="water_page_thumbnail_7">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[6].id}
                  onClick={getVideoId}
                >
                  <button className="water_page_thumbnail__btn">
                    {videoData[6].isFavorite ? (
                      <AiFillLike className="water_page_thumbnail__btn_icon" />
                    ) : (
                      <AiOutlineLike className="water_page_thumbnail__btn_icon" />
                    )}
                  </button>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[6].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoId}
                  // value={videoData[6].id}
                ></img>
              </div>
              {/* 8 */}
              <div className="water_page_thumbnail_8">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[7].id}
                  onClick={getVideoId}
                >
                  <button className="water_page_thumbnail__btn">
                    {videoData[7].isFavorite ? (
                      <AiFillLike className="water_page_thumbnail__btn_icon" />
                    ) : (
                      <AiOutlineLike className="water_page_thumbnail__btn_icon" />
                    )}
                  </button>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[7].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoId}
                  // value={videoData[7].id}
                ></img>
              </div>
            </div>
          </div>
          {/* 썸네일 컨테이너 끝 */}
        </div>
      )}
    </div>
  );
};

export default withRouter(Favorites);
