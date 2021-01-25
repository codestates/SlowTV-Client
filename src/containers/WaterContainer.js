// ! test중이라 Water에서만 사용하지만 추후 파일명도 변경해서 Water, Fire, Snow, Grass 모두에서 사용하게 끔 만들기
import React from "react";
import Water from "../components/contents/Water";
import { connect } from "react-redux";
import { clickThumbnail, addFavorites } from "../modules/water";
import { openModal } from "../modules/modal";
import { clickCategory } from "../modules/fakeside";

const WaterContainer = ({
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
    <Water
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
      // handleOnClickModal={handleOnClickModal}
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

export default connect(mapStateToProps, mapDispatchToProps)(WaterContainer);
