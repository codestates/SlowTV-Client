// useEffect : 렌더링될 때 마다 특정 작업 수행
import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
// import SideContainer from "../../containers/SideContainer";
import FakeSideContainer from "../../containers/FakeSideContainer";
import NavContainer from "../../containers/NavContainer";
import ModalContainer from "../../containers/ModalContainer";
// import ThumbnailsContainer from "../../containers/ThumbnailsContainer";
// import HamburgerContainer from "../../containers/SideContainer";
import "./Water.css";
import { contents } from "../Fake/Fakedata.js";
import axios from "axios";
// import { ICON_NAME } from "react-icons/TYPE
// 즐겨찾기 전 손가락, 별 둘 둥 하나 선택
import { AiOutlineLike } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
// 즐겨찾기 후
import { AiFillLike } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import outlineLike from "../../img/OutlineLike.png";
import fillLike from "../../img/FillLike.png";

const Water = ({
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
  handleOnClickCategory,
}) => {
  //! 새로고침 용
  const [refersh, setRefresh] = useState("");

  // ! 즐겨찾기 수정 후 비디오 새로고침
  const handleGoCategory = async (e) => {
    // const category = e.target.attributes.value.value;
    const video = await axios(`https://mayweather24.com/category/water`, {
      withCredentials: true,
    });
    // console.log(
    //   "🚀 ~ file: FakeSide.js ~ line 15 ~ handleGoCategory ~ video",
    //   video.data.contents
    // );
    handleOnClickCategory(video.data.contents);
  };

  // ! 썸네일 클릭 시 비디오 아이디 구하기 -> 비디오 플레이어에서 해당 아이디 영상 재생
  const getVideoData = async (e) => {
    const videoId = e.target.attributes.value.value;
    const id = videoId.split(" ")[0];
    const isAdded = videoId.split(" ")[1];

    if (!isAdded) {
      clickThumbnail(id);
    } else if (isLoggedIn && isAdded) {
      // ! 추가
      const video = videoData.filter((data) => data.id === Number(id));
      if (isAdded === "undefined") {
        const favorites = await axios.post(
          "https://mayweather24.com/add-favorite",
          {
            link: video[0].contentlink,
          },
          {
            withCredentials: true,
          }
        );
        console.log(
          "🚀 ~ file: Water.js ~ line 50 ~ getVideoData ~ favorites",
          favorites
        );

        handleGoCategory();
      } else if (isLoggedIn && isAdded) {
        // ! 제거
        const favorites = await axios.post(
          "https://mayweather24.com/delete-favorite",
          {
            link: video[0].contentlink,
          },
          {
            withCredentials: true,
          }
        );
        console.log(
          "🚀 ~ file: Water.js ~ line 50 ~ getVideoData ~ favorites",
          favorites
        );

        handleGoCategory();
      }
    } else if (!isLoggedIn) {
      // 얼럿 말고 직접 만들기
      alert("로그인 시 사용 가능합니다 맨 마지막 분기.");
    }
  };

  return (
    <div className="water_page">
      {!videoData ? (
        <div className="loading_water_page">loding...</div>
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
                  onClick={getVideoData}
                >
                  <div
                    className="water_page_thumbnail__btn"
                    value={`${videoData[0].id} ${videoData[0].isFavorite}`}
                  >
                    {videoData[0].isFavorite ? (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={fillLike}
                        alt="fillLike"
                        value={`${videoData[0].id} ${videoData[0].isFavorite}`}
                      ></img>
                    ) : (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={outlineLike}
                        alt="outlineLike"
                        value={`${videoData[0].id} ${videoData[0].isFavorite}`}
                      ></img>
                    )}
                  </div>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[0].thumbnail}
                  alt="undefined thumbnail"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  // onClick={getVideoData}
                  // value={videoData[0].id}
                ></img>
              </div>
              {/* 2 */}
              <div className="water_page_thumbnail_2">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[1].id}
                  onClick={getVideoData}
                >
                  <div
                    className="water_page_thumbnail__btn"
                    value={`${videoData[1].id} ${videoData[1].isFavorite}`}
                  >
                    {videoData[1].isFavorite ? (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={fillLike}
                        alt="fillLike"
                        value={`${videoData[1].id} ${videoData[1].isFavorite}`}
                      ></img>
                    ) : (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={outlineLike}
                        alt="outlineLike"
                        value={`${videoData[1].id} ${videoData[1].isFavorite}`}
                      ></img>
                    )}
                  </div>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[1].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoData}
                  // value={videoData[1].id}
                ></img>
              </div>
              {/* 3 */}
              <div className="water_page_thumbnail_3">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[2].id}
                  onClick={getVideoData}
                >
                  <div
                    className="water_page_thumbnail__btn"
                    value={`${videoData[2].id} ${videoData[2].isFavorite}`}
                  >
                    {videoData[2].isFavorite ? (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={fillLike}
                        alt="fillLike"
                        value={`${videoData[2].id} ${videoData[2].isFavorite}`}
                      ></img>
                    ) : (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={outlineLike}
                        alt="outlineLike"
                        value={`${videoData[2].id} ${videoData[2].isFavorite}`}
                      ></img>
                    )}
                  </div>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[2].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoData}
                  // value={videoData[2].id}
                ></img>
              </div>
              {/* 4 */}
              <div className="water_page_thumbnail_4">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[3].id}
                  onClick={getVideoData}
                >
                  <div
                    className="water_page_thumbnail__btn"
                    value={`${videoData[3].id} ${videoData[3].isFavorite}`}
                  >
                    {videoData[3].isFavorite ? (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={fillLike}
                        alt="fillLike"
                        value={`${videoData[3].id} ${videoData[3].isFavorite}`}
                      ></img>
                    ) : (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={outlineLike}
                        alt="outlineLike"
                        value={`${videoData[3].id} ${videoData[3].isFavorite}`}
                      ></img>
                    )}
                  </div>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[3].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoData}
                  // value={videoData[3].id}
                ></img>
              </div>
              {/* 5 */}
              <div className="water_page_thumbnail_5">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[4].id}
                  onClick={getVideoData}
                >
                  <div
                    className="water_page_thumbnail__btn"
                    value={`${videoData[4].id} ${videoData[4].isFavorite}`}
                  >
                    {videoData[4].isFavorite ? (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={fillLike}
                        alt="fillLike"
                        value={`${videoData[4].id} ${videoData[4].isFavorite}`}
                      ></img>
                    ) : (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={outlineLike}
                        alt="outlineLike"
                        value={`${videoData[4].id} ${videoData[4].isFavorite}`}
                      ></img>
                    )}
                  </div>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[4].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoData}
                  // value={videoData[4].id}
                ></img>
              </div>
              {/* 6 */}
              <div className="water_page_thumbnail_6">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[5].id}
                  onClick={getVideoData}
                >
                  <div
                    className="water_page_thumbnail__btn"
                    value={`${videoData[5].id} ${videoData[5].isFavorite}`}
                  >
                    {videoData[5].isFavorite ? (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={fillLike}
                        alt="fillLike"
                        value={`${videoData[5].id} ${videoData[5].isFavorite}`}
                      ></img>
                    ) : (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={outlineLike}
                        alt="outlineLike"
                        value={`${videoData[5].id} ${videoData[5].isFavorite}`}
                      ></img>
                    )}
                  </div>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[5].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoData}
                  // value={videoData[5].id}
                ></img>
              </div>
              {/* 7 */}
              <div className="water_page_thumbnail_7">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[6].id}
                  onClick={getVideoData}
                >
                  <div
                    className="water_page_thumbnail__btn"
                    value={`${videoData[6].id} ${videoData[6].isFavorite}`}
                  >
                    {videoData[6].isFavorite ? (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={fillLike}
                        alt="fillLike"
                        value={`${videoData[6].id} ${videoData[6].isFavorite}`}
                      ></img>
                    ) : (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={outlineLike}
                        alt="outlineLike"
                        value={`${videoData[6].id} ${videoData[6].isFavorite}`}
                      ></img>
                    )}
                  </div>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[6].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoData}
                  // value={videoData[6].id}
                ></img>
              </div>
              {/* 8 */}
              <div className="water_page_thumbnail_8">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[7].id}
                  onClick={getVideoData}
                >
                  <div
                    className="water_page_thumbnail__btn"
                    value={`${videoData[7].id} ${videoData[7].isFavorite}`}
                  >
                    {videoData[7].isFavorite ? (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={fillLike}
                        alt="fillLike"
                        value={`${videoData[7].id} ${videoData[7].isFavorite}`}
                      ></img>
                    ) : (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={outlineLike}
                        alt="outlineLike"
                        value={`${videoData[7].id} ${videoData[7].isFavorite}`}
                      ></img>
                    )}
                  </div>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[7].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoData}
                  // value={videoData[7].id}
                ></img>
              </div>
              {/* 9 */}
              <div className="water_page_thumbnail_8">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={videoData[8].id}
                  onClick={getVideoData}
                >
                  <div
                    className="water_page_thumbnail__btn"
                    value={`${videoData[8].id} ${videoData[8].isFavorite}`}
                  >
                    {videoData[8].isFavorite ? (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={fillLike}
                        alt="fillLike"
                        value={`${videoData[8].id} ${videoData[8].isFavorite}`}
                      ></img>
                    ) : (
                      <img
                        className="water_page_thumbnail__btn_icon"
                        src={outlineLike}
                        alt="outlineLike"
                        value={`${videoData[8].id} ${videoData[8].isFavorite}`}
                      ></img>
                    )}
                  </div>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={videoData[8].thumbnail}
                  alt="undefined thumbnail"
                  // onClick={getVideoData}
                  // value={videoData[8].id}
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

export default withRouter(Water);
