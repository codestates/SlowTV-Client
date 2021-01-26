import React from "react";
import SideRemoteControl2 from "../components/SideRemoteControl2";
import { connect } from "react-redux";
import { clickCategory } from "../modules/fakeside";
import { openModal, closeModal } from "../modules/modal";

const SideRemoteControl2Container = ({
  videoData,
  handleOnClickCategory,
  isLoggedIn,
  closeModal,
}) => {
  return (
    <SideRemoteControl2
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideRemoteControl2Container);
