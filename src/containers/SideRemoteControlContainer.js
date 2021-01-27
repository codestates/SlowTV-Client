import React from "react";
import SideRemoteControl from "../components/SideRemoteControl";
import { connect } from "react-redux";
import { clickCategory, clickRemoteControl } from "../modules/fakeside";
import { openModal, closeModal } from "../modules/modal";

const SideRemoteControlContainer = ({
  videoData,
  handleOnClickCategory,
  isLoggedIn,
  closeModal,
  clickRemoteControl,
  isRemoteControlOn,
}) => {
  return (
    <SideRemoteControl
      videoData={videoData}
      handleOnClickCategory={handleOnClickCategory}
      isLoggedIn={isLoggedIn}
      closeModal={closeModal}
      isRemoteControlOn={isRemoteControlOn}
      clickRemoteControl={clickRemoteControl}
    />
  );
};

const mapStateToProps = (state) => ({
  videoData: state.fakeside.videoData,
  isLoggedIn: state.login.isLoggedIn,
  isRemoteControlOn: state.fakeside.isRemoteControlOn,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnClickCategory: (category) => {
    dispatch(clickCategory(category));
  },
  closeModal: () => {
    dispatch(closeModal());
  },
  clickRemoteControl: () => {
    dispatch(clickRemoteControl());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideRemoteControlContainer);
