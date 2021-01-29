import React from "react";
import Modal from "../components/contents/Modal";
import { connect } from "react-redux";
import {
  clickSignIn,
  clickLogout,
  changeSignUp,
  changeEmail,
  changeNickName,
  getGithubAccessToken,
  getGoogleAccessToken,
} from "../modules/login";
import { clickCategory } from "../modules/sideRemoteControl";

import { closeModal } from "../modules/modal";

const ModalContainer = ({
  isLoggedIn,
  clickSignIn,
  clickLogout,
  closeModal,
  changeEmail,
  changeNickName,
  nickname,
  handleOnClickCategory,
  getGithubAccessToken,
  getGoogleAccessToken,
  changeSignUp,
}) => {
  return (
    <Modal
      closeModal={closeModal}
      isLoggedIn={isLoggedIn}
      clickSignIn={clickSignIn}
      clickLogout={clickLogout}
      changeEmail={changeEmail}
      changeNickName={changeNickName}
      nickname={nickname}
      handleOnClickCategory={handleOnClickCategory}
      getGithubAccessToken={getGithubAccessToken}
      getGoogleAccessToken={getGoogleAccessToken}
      changeSignUp={changeSignUp}
    />
  );
};

const mapStateToProps = (state) => ({
  isModalClicked: state.modal.isModalClicked,
  isLoggedIn: state.login.isLoggedIn,
  email: state.login.email,
  nickname: state.login.nickname,
  githubAccessToken: state.login.githubAccessToken,
  googleAccessToken: state.login.googleAccessToken,
});

const mapDispatchToProps = (dispatch) => ({
  clickSignIn: () => {
    // console.log("a");
    dispatch(clickSignIn());
  },
  clickLogout: () => {
    dispatch(clickLogout());
    dispatch(closeModal());
  },
  changeSignUp: () => {
    dispatch(changeSignUp());
  },
  closeModal: () => {
    dispatch(closeModal());
  },
  changeEmail: (email) => {
    dispatch(changeEmail(email));
  },
  changeNickName: (nickname) => {
    dispatch(changeNickName(nickname));
  },
  handleOnClickCategory: (category) => {
    dispatch(clickCategory(category));
  },
  getGithubAccessToken: (accessToken) => {
    dispatch(getGithubAccessToken(accessToken));
  },
  getGoogleAccessToken: (accessToken) => {
    dispatch(getGoogleAccessToken(accessToken));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
