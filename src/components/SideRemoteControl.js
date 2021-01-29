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
    try {
      goToAnotherPage();
      // ! 게스트인 경우, 페이보릿 아무 것도 없음
      const category = e.target.attributes.value.value;
      if (!isLoggedIn) {
        handleOnClickCategory(null);
        closeModal();
        history.push(`/contents/favorites`);
      } else {
        const favorites = await axios("https://server.slowtv24.com/favorites", {
          withCredentials: true,
        });
        // console.log(
        //   "🚀 ~ file: SideRemoteControl.js ~ line 66 ~ handleGoFavorites ~ favorites",
        //   favorites
        //   );
        if (favorites.data.userFavorites) {
          handleOnClickCategory(favorites.data.userFavorites);
          closeModal();
          history.push("/contents/favorites");
        }
      }
    } catch (error) {
      handleOnClickCategory(null);
      closeModal();
      history.push("/contents/favorites");
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
            <div className="list_item_font">On</div>
          </div>
        ) : (
          <div className="list_item2" onClick={clickRemoteControl}>
            <div className="list_item_font">Off</div>
          </div>
        )}
        {/* Home OR Contents */}
        {isContentsPage ? (
          <div
            className={isRemoteControlOn ? "list_item" : "list_item2"}
            onClick={handleGoHome}
          >
            <div className="list_item_font">Home</div>
          </div>
        ) : (
          <div
            className={isRemoteControlOn ? "list_item" : "list_item2"}
            onClick={handleGoContents}
          >
            <div className="list_item_font">Contents</div>
          </div>
        )}
        {/* Water */}
        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="water"
          onClick={handleGoCategory}
        >
          <div className="list_item_font" value="water">
            Water
          </div>
        </div>
        {/* Fire */}
        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="fire"
          onClick={handleGoCategory}
        >
          <div className="list_item_font" value="fire">
            Fire
          </div>
        </div>
        {/* Sonw */}
        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="snow"
          onClick={handleGoCategory}
        >
          <div className="list_item_font" value="snow">
            Snow
          </div>
        </div>
        {/* Grass */}
        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="grass"
          onClick={handleGoCategory}
        >
          <div className="list_item_font" value="grass">
            Grass
          </div>
        </div>
        {/* Favorites */}
        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="favorites"
          onClick={handleGoFavorites}
        >
          <div className="list_item_font" value="favorites">
            Favorites
          </div>
        </div>
        {/* Profile */}
        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="profile"
          onClick={handleGoCategory}
        >
          <div className="list_item_font" value="profile">
            Profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SideRemoteControl);
