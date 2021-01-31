import React from "react";
import ChangeUserPassword from "../components/contents/ChangeUserPassword";
import { connect } from "react-redux";
import { clickLogout } from "../modules/login";

const ChangeUserPasswordContainer = ({
  isLoggedIn,
  isModalClicked,
  clickLogout,
}) => {
  return (
    <ChangeUserPassword
      isLoggedIn={isLoggedIn}
      isModalClicked={isModalClicked}
      clickLogout={clickLogout}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  isModalClicked: state.modal.isModalClicked,
});

const mapDispatchToProps = (dispatch) => ({
  clickLogout: () => {
    dispatch(clickLogout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeUserPasswordContainer);
