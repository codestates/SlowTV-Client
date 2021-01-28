import React from "react";
import VideoList from "../components/contents/VideoList";
import { connect } from "react-redux";
import { clickThumbnail } from "../modules/videoList";
import { clickCategory } from "../modules/sideRemoteControl";
import { goToAnotherPage } from "../modules/contents";

const VideoListContainer = ({
  isLoggedIn,
  isModalClicked,
  videoData,
  clickThumbnail,
  handleOnClickCategory,
  goToAnotherPage,
  nowPage,
}) => {
  return (
    <VideoList
      isLoggedIn={isLoggedIn}
      isModalClicked={isModalClicked}
      videoData={videoData}
      clickThumbnail={clickThumbnail}
      handleOnClickCategory={handleOnClickCategory}
      goToAnotherPage={goToAnotherPage}
      nowPage={nowPage}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  isModalClicked: state.modal.isModalClicked,
  videoData: state.sideRemoteControl.videoData,
  nowPage: state.sideRemoteControl.nowPage,
});

const mapDispatchToProps = (dispatch, props) => ({
  clickThumbnail: (id) => {
    dispatch(clickThumbnail(id));
    props.history.push("/watch");
  },

  handleOnClickCategory: (category) => {
    dispatch(clickCategory(category));
  },
  goToAnotherPage: () => {
    dispatch(goToAnotherPage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);
