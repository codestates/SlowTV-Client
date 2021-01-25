import React from "react";
import FakeSide from "../components/Fake/FakeSide";
import { connect } from "react-redux";
import { clickCategory } from "../modules/fakeside";

const FakeSideContainer = ({ videoData, handleOnClickCategory }) => {
  return (
    <FakeSide
      videoData={videoData}
      handleOnClickCategory={handleOnClickCategory}
    />
  );
};

const mapStateToProps = (state) => ({
  videoData: state.fakeside.videoData,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnClickCategory: (category) => {
    dispatch(clickCategory(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FakeSideContainer);
