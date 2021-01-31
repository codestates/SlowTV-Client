import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
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
  sessionStorage.setItem("videoData", JSON.stringify(videoData));

  const handleGoCategory = async (e) => {
    const video = await axios(
      `https://server.slowtv24.com/category/${nowPage}`,
      {
        withCredentials: true,
      }
    );
    handleOnClickCategory(video.data.contents);
  };

  const getVideoData = async (e) => {
    const videoId = e.target.attributes.value.value;
    const id = videoId.split(" ")[0];
    const isAdded = videoId.split(" ")[1];

    if (!isAdded) {
      clickThumbnail(id);
    } else if (isLoggedIn && isAdded) {
      const video = videoData.filter((data) => data.id === Number(id));
      if (isAdded === "undefined") {
        const addFavorites = await axios.post(
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
        const deleteFavorites = await axios.post(
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
      alert("로그인 시 사용 가능합니다 맨 마지막 분기.");
    }
  };

  let videoList = null;
  if (videoData) {
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
        <div
          className="water_page_thumbnail__btn_box"
          value={video.id}
          onClick={getVideoData}
        >
          <div
            className={
              video.isFavorite
                ? "water_page_thumbnail__btn_like"
                : "water_page_thumbnail__btn"
            }
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
          <NavContainer />
          <SideRemoteControlContainer />
          {isModalClicked ? <ModalContainer /> : <div></div>}

          <div className="water_page_container">
            <div className="water_page_small_size_lists">{videoList}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(VideoList);
