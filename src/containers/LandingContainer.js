import React from "react";
import Landing from "../components/Landing";
import { connect } from "react-redux";
import { openModal, closeModal } from "../modules/modal";

const LandingContainer = ({ isLoggedIn, isModalClicked, closeModal }) => {
  return (
    <Landing
      isLoggedIn={isLoggedIn}
      isModalClicked={isModalClicked}
      closeModal={closeModal}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  isModalClicked: state.modal.isModalClicked,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
