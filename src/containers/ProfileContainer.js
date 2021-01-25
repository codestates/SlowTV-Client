import React from "react";
import Profile from "../components/contents/Profile";
import { connect } from "react-redux";
import { clickLogout } from "../modules/login";

const ProfileContainer = ({
  email,
  nickname,
  isModalClicked,
  isLoggedIn,
  clickLogout,
}) => {
  return (
    <Profile
      email={email}
      nickname={nickname}
      isModalClicked={isModalClicked}
      isLoggedIn={isLoggedIn}
      clickLogout={clickLogout}
    />
  );
};

const mapStateToProps = (state) => ({
  email: state.login.email,
  nickname: state.login.nickname,
  isModalClicked: state.modal.isModalClicked,
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  clickLogout: () => {
    dispatch(clickLogout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
