import React from "react";
import Nav from "../components/Nav";
import { connect } from "react-redux";
import { openModal, toggleModal } from "../modules/modal";

const NavContainer = ({ isLoggedIn, handleOnClickModal, toggleModal }) => {
  return (
    <Nav
      isLoggedIn={isLoggedIn}
      handleOnClickModal={handleOnClickModal}
      toggleModal={toggleModal}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
