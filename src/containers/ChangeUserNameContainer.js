import React from "react";
import ChangeUserName from "../components/contents/ChangeUserName";
import { connect } from "react-redux";
import { changeNickName } from "../modules/login";

const ChangeUserNameContainer = ({
  nickname,
  changeNickName,
  isLoggedIn,
  isModalClicked,
}) => {
  return (
    <ChangeUserName
      nickname={nickname}
      changeNickName={changeNickName}
      isLoggedIn={isLoggedIn}
      isModalClicked={isModalClicked}
    />
  );
};

const mapStateToProps = (state) => ({
  nickname: state.login.nickname,
  isLoggedIn: state.login.isLoggedIn,
  isModalClicked: state.modal.isModalClicked,
});

const mapDispatchToProps = (dispatch) => ({
  changeNickName: (nickname) => {
    dispatch(changeNickName(nickname));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeUserNameContainer);
