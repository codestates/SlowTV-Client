import React from "react";
import Favorites from "../components/Favorites";
import { clickThumbnail, addFavorites } from "../modules/water";
import { connect } from "react-redux";
import { clickCategory } from "../modules/fakeside";

const FavoritesContainer = ({
  id,
  handleOnClick,
  isClicked,
  isModalClicked,
  handleOnClickModal,
  videoData,
  clickThumbnail,
  addFavorites,
  isAddFavoirtes,
  isLoggedIn,
  handleOnClickCategory,
}) => {
  return (
    <Favorites
      id={id}
      handleOnClick={handleOnClick}
      isClicked={isClicked}
      isModalClicked={isModalClicked}
      videoData={videoData}
      clickThumbnail={clickThumbnail}
      addFavorites={addFavorites}
      isAddFavoirtes={isAddFavoirtes}
      isLoggedIn={isLoggedIn}
      handleOnClickCategory={handleOnClickCategory}
    />
  );
};

const mapStateToProps = (state) => ({
  id: state.water.id,
  isClicked: state.hamburger.isClicked,
  isModalClicked: state.modal.isModalClicked,
  videoData: state.fakeside.videoData,
  isAddFavoirtes: state.water.isAddFavoirtes,
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = (dispatch, props) => ({
  clickThumbnail: (id) => {
    // 각 영상 아이디 얻어냄
    // console.log("🚀 ~ file: ContentsContainer.js ~ line 23 ~ id", id);
    dispatch(clickThumbnail(id));
    props.history.push("/watch");
  },
  addFavorites: () => {
    dispatch(addFavorites());
  },
  handleOnClickCategory: (category) => {
    dispatch(clickCategory(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
