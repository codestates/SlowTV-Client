// ! 내려받은 비디오가 undefined
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

const FavoritesEntry = ({
  id,
  handleOnClick,
  history,
  isClicked,
  isModalClicked,
  // handleOnClickModal,
  // vi deoData,
  video, // 맵으로 내려받음
  clickThumbnail,
  addFavorites,
  isAddFavoirtes,
  isLoggedIn,
}) => {
  console.log("페이보릿엔트리>>>>>");
  console.log("🚀 ~ file: FavoritesEntry.js ~ line 33 ~ video", video);
  // ! 썸네일 클릭 시 비디오 아이디 구하기 -> 비디오 플레이어에서 해당 아이디 영상 재생
  const getVideoId = (e) => {
    const id = e.target.attributes.value.value;
    console.log("🚀 ~ file: Water.js ~ line 36 ~ getVideoId ~ id", id);
    clickThumbnail(id);
  };
  return (
    <div className="water_page">
      {/* //! 비디오 데이터 없으면 */}
      {!video ? (
        isLoggedIn ? (
          <div className="loaded_water_page">
            <NavContainer />
            <FakeSideContainer />
            {isModalClicked ? <ModalContainer /> : <div></div>}
            <div>아직 추가한 즐겨찾기가 없습니다 favortiesEntry.</div>
          </div>
        ) : (
          <div className="loaded_water_page">
            <NavContainer />
            <FakeSideContainer />
            {isModalClicked ? <ModalContainer /> : <div></div>}
            <div>로그인 후 이용해 주세요 favortiesEntry.</div>
          </div>
        )
      ) : (
        <div className="loaded_water_page">
          {/* //! 비디오 데이터 있을 때, 페이보릿이 몇 개인지 모르기 때문에 맵으로 뿌려줘야 할 듯 */}
          {/* <Nav /> */}
          <NavContainer />
          <FakeSideContainer />
          {isModalClicked ? <ModalContainer /> : <div></div>}
          {/* 썸네일 컨테이너 */}
          <div className="water_page_container">
            <div className="water_page_small_size_lists">
              <div className="water_page_thumbnail_1">
                <div
                  className="water_page_thumbnail__btn_box"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  value={video.id}
                  onClick={getVideoId}
                >
                  <button className="water_page_thumbnail__btn">
                    {video.isFavorite ? (
                      <AiFillLike className="water_page_thumbnail__btn_icon" />
                    ) : (
                      <AiOutlineLike className="water_page_thumbnail__btn_icon" />
                    )}
                  </button>
                </div>
                <img
                  className="water_page_thumbnail_img"
                  src={video.thumbnail}
                  alt="undefined thumbnail"
                  // ! 버튼이 추가되면서 이미지에서 클릭 안 됨. -> btn_box로 이동
                  // onClick={getVideoId}
                  // value={video.id}
                ></img>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(FavoritesEntry);
