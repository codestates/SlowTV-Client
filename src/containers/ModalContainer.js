import React from "react";
import Modal from "../components/contents/Modal";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  clickSignIn,
  clickLogout,
  changeSignUp,
  changeEmail,
  changeNickName,
  getGithubAccessToken,
  getGoogleAccessToken,
} from "../modules/login";
import { clickCategory } from "../modules/fakeside";

import { openModal, closeModal } from "../modules/modal";

const ModalContainer = ({
  isLoggedIn,
  clickSignIn,
  clickLogout,
  openModal,
  closeModal,
  changeEmail,
  changeNickName,
  email,
  nickname,
  handleOnClickCategory,
  githubAccessToken,
  googleAccessToken,
  getGithubAccessToken,
  getGoogleAccessToken,
  changeSignUp,
}) => {
  return (
    <Modal
      openModal={openModal}
      closeModal={closeModal}
      isLoggedIn={isLoggedIn}
      clickSignIn={clickSignIn}
      clickLogout={clickLogout}
      changeEmail={changeEmail}
      changeNickName={changeNickName}
      email={email}
      nickname={nickname}
      handleOnClickCategory={handleOnClickCategory}
      githubAccessToken={githubAccessToken}
      googleAccessToken={googleAccessToken}
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
  openModal: () => {
    dispatch(openModal());
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
