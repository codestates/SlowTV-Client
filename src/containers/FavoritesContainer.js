import React from "react";
import Favorites from "../components/Favorites";
import { clickThumbnail, addFavorites } from "../modules/videoList";
import { connect } from "react-redux";
import {
  clickCategory,
  clickRemoteControl,
} from "../modules/sideRemoteControl";
import {
  clickSignIn,
  changeSignUp,
  changeNickName,
  changeEmail,
} from "../modules/login";

const FavoritesContainer = ({
  isLoggedIn,
  isModalClicked,
  videoData,
  clickThumbnail,
  clickSignIn,
  changeNickName,
  changeEmail,
  changeSignUp,
  handleOnClickCategory,
  clickRemoteControl,
  isRemoteControlOn,
}) => {
  return (
    <Favorites
      isLoggedIn={isLoggedIn}
      isModalClicked={isModalClicked}
      videoData={videoData}
      clickThumbnail={clickThumbnail}
      clickSignIn={clickSignIn}
      changeNickName={changeNickName}
      changeEmail={changeEmail}
      changeSignUp={changeSignUp}
      handleOnClickCategory={handleOnClickCategory}
      isRemoteControlOn={isRemoteControlOn}
      clickRemoteControl={clickRemoteControl}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  isModalClicked: state.modal.isModalClicked,
  videoData: state.sideRemoteControl.videoData,
  isRemoteControlOn: state.sideRemoteControl.isRemoteControlOn,
});

const mapDispatchToProps = (dispatch, props) => ({
  clickThumbnail: (id) => {
    dispatch(clickThumbnail(id));
    props.history.push("/watch");
  },
  handleOnClickCategory: (category) => {
    dispatch(clickCategory(category));
  },
  clickSignIn: () => {
    dispatch(clickSignIn());
  },
  changeEmail: (email) => {
    dispatch(changeEmail(email));
  },
  changeNickName: (nickname) => {
    dispatch(changeNickName(nickname));
  },
  changeSignUp: () => {
    dispatch(changeSignUp());
  },
  clickRemoteControl: () => {
    dispatch(clickRemoteControl());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
