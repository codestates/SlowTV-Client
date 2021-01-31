import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./SideRemoteControl.css";

const SideRemoteControl = ({
  history,
  handleOnClickCategory,
  isLoggedIn,
  closeModal,
  isRemoteControlOn,
  clickRemoteControl,
  isContentsPage,
  goToAnotherPage,
  movePage,
}) => {
  const handleGoHome = () => {
    closeModal();
    goToAnotherPage();
    history.push("/");
  };

  const handleGoContents = () => {
    closeModal();
    history.push("/contents");
  };

  const handleGoCategory = async (e) => {
    const category = e.target.attributes.value.value;
    if (category === "profile") {
      goToAnotherPage();
      closeModal();
      history.push("/contents/profile");
    } else {
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

  const handleGoFavorites = async (e) => {
    try {
      goToAnotherPage();

      const category = e.target.attributes.value.value;
      if (!isLoggedIn) {
        handleOnClickCategory(null);
        closeModal();
        history.push(`/contents/favorites`);
      } else {
        const favorites = await axios("https://server.slowtv24.com/favorites", {
          withCredentials: true,
        });
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

  return (
    <div className="remote_control">
      <div
        className={
          isRemoteControlOn ? "remote_control_box" : "remote_control_box2"
        }
      >
        {isRemoteControlOn ? (
          <div className="list_item" onClick={clickRemoteControl}>
            <div className="list_item_font">On</div>
          </div>
        ) : (
          <div className="list_item2" onClick={clickRemoteControl}>
            <div className="list_item_font">Off</div>
          </div>
        )}

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

        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="water"
          onClick={handleGoCategory}
        >
          <div className="list_item_font" value="water">
            Water
          </div>
        </div>

        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="fire"
          onClick={handleGoCategory}
        >
          <div className="list_item_font" value="fire">
            Fire
          </div>
        </div>

        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="snow"
          onClick={handleGoCategory}
        >
          <div className="list_item_font" value="snow">
            Snow
          </div>
        </div>

        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="grass"
          onClick={handleGoCategory}
        >
          <div className="list_item_font" value="grass">
            Grass
          </div>
        </div>

        <div
          className={isRemoteControlOn ? "list_item" : "list_item2"}
          value="favorites"
          onClick={handleGoFavorites}
        >
          <div className="list_item_font" value="favorites">
            Favorites
          </div>
        </div>

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
