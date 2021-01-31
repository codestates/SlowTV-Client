import React from "react";
import Nav from "../components/Nav";
import { connect } from "react-redux";
import { openModal, closeModal, toggleModal } from "../modules/modal";

const NavContainer = ({
  closeModal,
  isLoggedIn,
  handleOnClickModal,
  toggleModal,
}) => {
  return (
    <Nav
      isLoggedIn={isLoggedIn}
      handleOnClickModal={handleOnClickModal}
      toggleModal={toggleModal}
      closeModal={closeModal}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = (dispatch, props) => ({
  handleOnClickModal: () => {
    dispatch(openModal());
  },
  toggleModal: () => {
    dispatch(toggleModal());
  },
  closeModal: () => {
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
