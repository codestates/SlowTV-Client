// useEffect : 렌더링될 때 마다 특정 작업 수행
import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import SideRemoteControlContainer from "../../containers/SideRemoteControlContainer";
import NavContainer from "../../containers/NavContainer";
import ModalContainer from "../../containers/ModalContainer";
import axios from "axios";
import outlineLike from "../../img/OutlineLike.png";
import fillLike from "../../img/FillLike.png";
import "./VideoList.css";

const VideoList = ({
  isLoggedIn,
  isModalClicked,
  videoData,
  clickThumbnail,
  handleOnClickCategory,
  goToAnotherPage,
  nowPage,
}) => {
  // ! 즐겨찾기 수정 후 비디오 새로고침
  const handleGoCategory = async (e) => {
    const video = await axios(
      `https://server.slowtv24.com/category/${nowPage}`,
      {
        withCredentials: true,
      }
    );
    handleOnClickCategory(video.data.contents); // videoData 상태 값에 비디오들 넣음
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
        const water = await axios.post(
          "https://server.slowtv24.com/add-favorite",
          {
            link: video[0].contentlink,
          },
          {
            withCredentials: true,
          }
        );

        handleGoCategory();
      } else if (isLoggedIn && isAdded) {
        // ! 제거
        const favorites = await axios.post(
          "https://server.slowtv24.com/delete-favorite",
          {
            link: video[0].contentlink,
          },
          {
            withCredentials: true,
          }
        );
        handleGoCategory();
      }
    } else if (!isLoggedIn) {
      // 얼럿 말고 직접 만들기
      alert("로그인 시 사용 가능합니다 맨 마지막 분기.");
    }
  };

  // ! videoData mapping
  let videoList = null;
  if (videoData) {
    // const handleDrag = () => {
    //   console.log("dragStart");
    // };

    const handleDrag = () => {
      const draggables = document.querySelectorAll("water_page_thumbnail");
      const container = document.querySelectorAll("water_page_container");

      draggables.forEach((draggable) => {
        draggable.addEventListner("dragstart", () => {
          console.log("drag start");
        });
      });
    };

    videoList = videoData.map((video) => (
      <div
        className="water_page_thumbnail"
        key={video.id}
        draggable="true"
        onDrag={handleDrag}
      >
        {/* {console.log("🚀 ~ file: Favorites.js ~ line 146 ~ video", video)} */}
        <div
          className="water_page_thumbnail__btn_box"
          value={video.id}
          onClick={getVideoData}
        >
          <div
            className="water_page_thumbnail__btn"
            value={`${video.id} ${video.isFavorite}`}
          >
            {video.isFavorite ? (
              <img
                className="water_page_thumbnail__btn_icon"
                src={fillLike}
                alt="fillLike"
                value={`${video.id} ${video.isFavorite}`}
              ></img>
            ) : (
              <img
                className="water_page_thumbnail__btn_icon"
                src={outlineLike}
                alt="outlineLike"
                value={`${video.id} ${video.isFavorite}`}
              ></img>
            )}
          </div>
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
    ));
  }

  useEffect(() => {
    goToAnotherPage();
  });
  return (
    <div className="water_page">
      {!videoData ? (
        <div className="loading_water_page">loding...</div>
      ) : (
        <div className="loaded_water_page">
          {/* <Nav /> */}
          <NavContainer />
          <SideRemoteControlContainer />
          {isModalClicked ? <ModalContainer /> : <div></div>}
          {/* 썸네일 컨테이너 */}
          <div className="water_page_container">
            <div className="water_page_small_size_lists">{videoList}</div>
          </div>
          {/* 썸네일 컨테이너 끝 */}
        </div>
      )}
    </div>
  );
};

export default withRouter(VideoList);
