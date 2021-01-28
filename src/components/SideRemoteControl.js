import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./SideRemoteControl.css";

const SideRemoteControl = ({
  history,
  handleOnClickCategory,
  videoData,
  isLoggedIn,
  closeModal,
  isRemoteControlOn,
  clickRemoteControl,
  isContentsPage,
  goToAnotherPage,
  movePage,
}) => {
  // const [isOn, SetOn] = useState(false);

  // const handleSetOn = () => {
  // SetOn(!isOn);
  // };

  //! GoHome
  const handleGoHome = () => {
    closeModal();
    goToAnotherPage();
    history.push("/");
  };
  // ! GoCotents
  const handleGoContents = () => {
    closeModal();
    history.push("/contents");
  };

  // ! 페이보릿 제외한 영상 카테고리
  const handleGoCategory = async (e) => {
    // console.log("왜 안 돼 ??");
    // console.log("왜 안 돼 ??");
    const category = e.target.attributes.value.value;
    if (category === "profile") {
      goToAnotherPage();
      closeModal();
      history.push("/contents/profile");
    } else {
      // ! Water~Grass
      movePage(category);
      const video = await axios(
        `https://server.slowtv24.com/category/${category}`,
        {
          withCredentials: true,
        }
      );
      handleOnClickCategory(video.data.contents);
      closeModal();
      history.push(`/contents/${category}`);
    }
  };

  // ! 페이보릿 카테고리
  const handleGoFavorites = async (e) => {
    goToAnotherPage();
    // ! 게스트인 경우, 페이보릿 아무 것도 없음
    const category = e.target.attributes.value.value;
    if (!isLoggedIn) {
      handleOnClickCategory(null);
      closeModal();
      history.push(`/contents/favorites`);
    } else {
      // ! 로그인한 경우
      console.log("여기서 문제 발생 왜?");
      const favorites = await axios("https://server.slowtv24.com/favorites", {
        withCredentials: true,
      });
      console.log(
        "🚀 ~ file: SideRemoteControl.js ~ line 66 ~ handleGoFavorites ~ favorites",
        favorites
      );
      if (favorites.data.userFavorites) {
        handleOnClickCategory(favorites.data.userFavorites);
        history.push("/contents/favorites");
      } else {
        handleOnClickCategory(null);
        history.push("/contents/favorites");
      }
      closeModal();
    }
  };

  // ! 리모콘 목록 동적 셋팅 : 컨텐츠 페이지 경우에 - 컨텐츠 대신 Home, 나머지 페이지 경우 컨텐츠 버튼으로 대체

  return (
    <div className="remote_control">
      <div
        className={
          isRemoteControlOn ? "remote_control_box" : "remote_control_box2"
        }
      >
        {/* On OR Off */}
        {isRemoteControlOn ? (
          <div className="list_item" onClick={clickRemoteControl}>
            On
          </div>
        ) : (
          <div className="list_item2" onClick={clickRemoteControl}>
            Off
          </div>
        )}
        {/* Home OR Contents */}
        {isContentsPage ? (
          <div
            className={isRemoteControlOn ? "list_item" : "list_item2"}
            onClick={handleGoHome}
          >
            Home
          </div>
        ) : (
          <div
            className={isRemoteControlOn ? "list_item" : "list_item2"}
            onClick={handleGoContents}
          >
            Contents
          </div>
        )}
        {/* Water */}
        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="water"
          onClick={handleGoCategory}
        >
          Water
        </div>
        {/* Fire */}
        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="fire"
          onClick={handleGoCategory}
        >
          Fire
        </div>
        {/* Sonw */}
        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="snow"
          onClick={handleGoCategory}
        >
          Snow
        </div>
        {/* Grass */}
        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="grass"
          onClick={handleGoCategory}
        >
          Grass
        </div>
        {/* Favorites */}
        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="favorites"
          onClick={handleGoFavorites}
        >
          Favorites
        </div>
        {/* Profile */}
        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="profile"
          onClick={handleGoCategory}
        >
          Profile
        </div>
      </div>
    </div>
  );
};

export default withRouter(SideRemoteControl);
