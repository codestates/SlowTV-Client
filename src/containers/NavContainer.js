import React from "react";
import Nav from "../components/Nav";
import { connect } from "react-redux";
import { openModal } from "../modules/modal";

const NavContainer = ({ isLoggedIn, handleOnClickModal }) => {
  return (
    <Nav isLoggedIn={isLoggedIn} handleOnClickModal={handleOnClickModal} />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = (dispatch, props) => ({
  handleOnClickModal: () => {
    dispatch(openModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
