import React from "react";
import Modal from "../components/contents/Modal";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  clickSignIn,
  clickLogout,
  changeEmail,
  changeNickName,
} from "../modules/login";
import { setIsClicked } from "../modules/modal";

const ModalContainer = ({
  isLoggedIn,
  clickSignIn,
  clickLogout,
  setIsClicked,
  changeEmail,
  changeNickName,
  email,
  nickname,
}) => {
  return (
    <Modal
      setIsClicked={setIsClicked}
      isLoggedIn={isLoggedIn}
      clickSignIn={clickSignIn}
      clickLogout={clickLogout}
      changeEmail={changeEmail}
      changeNickName={changeNickName}
      email={email}
      nickname={nickname}
    />
  );
};

const mapStateToProps = (state) => ({
  isModalClicked: state.modal.isModalClicked,
  isLoggedIn: state.login.isLoggedIn,
  email: state.login.email,
  nickname: state.login.nickname,
});

const mapDispatchToProps = (dispatch) => ({
  clickSignIn: () => {
    // console.log("a");
    dispatch(clickSignIn());
  },
  clickLogout: () => {
    dispatch(clickLogout());
  },

  setIsClicked: () => {
    dispatch(setIsClicked());
  },
  changeEmail: (email) => {
    dispatch(changeEmail(email));
  },
  changeNickName: (nickname) => {
    dispatch(changeNickName(nickname));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
