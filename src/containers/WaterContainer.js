// ! test중이라 Water에서만 사용하지만 추후 파일명도 변경해서 Water, Fire, Snow, Grass 모두에서 사용하게 끔 만들기
import React from "react";
import Water from "../components/contents/Water";
import { connect } from "react-redux";
import { clickThumbnail } from "../modules/water";
import { clickCategory } from "../modules/fakeside";

const WaterContainer = ({
  isLoggedIn,
  isModalClicked,
  videoData,
  clickThumbnail,
  handleOnClickCategory,
}) => {
  return (
    <Water
      isLoggedIn={isLoggedIn}
      isModalClicked={isModalClicked}
      videoData={videoData}
      clickThumbnail={clickThumbnail}
      handleOnClickCategory={handleOnClickCategory}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  isModalClicked: state.modal.isModalClicked,
  videoData: state.fakeside.videoData,
});

const mapDispatchToProps = (dispatch, props) => ({
  clickThumbnail: (id) => {
    dispatch(clickThumbnail(id));
    props.history.push("/watch");
  },

  handleOnClickCategory: (category) => {
    dispatch(clickCategory(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WaterContainer);
