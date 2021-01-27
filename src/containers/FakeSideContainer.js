import React from "react";
import FakeSide from "../components/Fake/FakeSide";
import { connect } from "react-redux";
import { clickCategory } from "../modules/fakeside";
import { openModal, closeModal } from "../modules/modal";

const FakeSideContainer = ({
  videoData,
  handleOnClickCategory,
  isLoggedIn,
  closeModal,
}) => {
  return (
    <FakeSide
      videoData={videoData}
      handleOnClickCategory={handleOnClickCategory}
      isLoggedIn={isLoggedIn}
      closeModal={closeModal}
    />
  );
};

const mapStateToProps = (state) => ({
  videoData: state.fakeside.videoData,
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnClickCategory: (category) => {
    dispatch(clickCategory(category));
  },
  closeModal: () => {
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FakeSideContainer);
