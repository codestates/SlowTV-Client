import React from "react";
import SideRemoteControl from "../components/SideRemoteControl";
import { connect } from "react-redux";
import {
  clickCategory,
  clickRemoteControl,
  movePage,
} from "../modules/sideRemoteControl";
import { openModal, closeModal } from "../modules/modal";
import { goToAnotherPage } from "../modules/contents";

const SideRemoteControlContainer = ({
  videoData,
  handleOnClickCategory,
  isLoggedIn,
  closeModal,
  clickRemoteControl,
  isRemoteControlOn,
  isContentsPage,
  goToAnotherPage,
  movePage,
  // nowPage,
}) => {
  return (
    <SideRemoteControl
      videoData={videoData}
      handleOnClickCategory={handleOnClickCategory}
      isLoggedIn={isLoggedIn}
      closeModal={closeModal}
      isRemoteControlOn={isRemoteControlOn}
      clickRemoteControl={clickRemoteControl}
      isContentsPage={isContentsPage}
      goToAnotherPage={goToAnotherPage}
      movePage={movePage}
      // nowPage={nowPage}
    />
  );
};

const mapStateToProps = (state) => ({
  videoData: state.sideRemoteControl.videoData,
  isLoggedIn: state.login.isLoggedIn,
  isRemoteControlOn: state.sideRemoteControl.isRemoteControlOn,
  isContentsPage: state.contents.isContentsPage,
  // nowPage: state.sideRemoteControl.nowPage,
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
  goToAnotherPage: () => {
    dispatch(goToAnotherPage());
  },
  movePage: (pageName) => {
    dispatch(movePage(pageName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideRemoteControlContainer);
