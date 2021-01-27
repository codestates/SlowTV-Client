import React from "react";
import Landing from "../components/Landing";
import { connect } from "react-redux";
import { closeModal } from "../modules/modal";

const LandingContainer = ({
  isLoggedIn,
  isModalClicked,
  nickname,
  closeModal,
}) => {
  return (
    <Landing
      isLoggedIn={isLoggedIn}
      isModalClicked={isModalClicked}
      nickname={nickname}
      closeModal={closeModal}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
