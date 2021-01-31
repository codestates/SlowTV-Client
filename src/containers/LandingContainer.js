import React from "react";
import Landing from "../components/Landing";
import { connect } from "react-redux";
import { closeModal } from "../modules/modal";
import { clickGetStarted } from "../modules/sideRemoteControl";

const LandingContainer = ({
  isLoggedIn,
  isModalClicked,
  nickname,
  closeModal,
  clickGetStarted,
}) => {
  return (
    <Landing
      isLoggedIn={isLoggedIn}
      isModalClicked={isModalClicked}
      nickname={nickname}
      closeModal={closeModal}
      clickGetStarted={clickGetStarted}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  isModalClicked: state.modal.isModalClicked,
  nickname: state.login.nickname,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch(closeModal());
  },
  clickGetStarted: () => {
    dispatch(clickGetStarted());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
