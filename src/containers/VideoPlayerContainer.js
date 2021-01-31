import React from "react";
import { connect } from "react-redux";
import VideoPlayer from "../components/VideoPlayer";

const VideoPlayerContainer = ({ id, videoData }) => {
  return <VideoPlayer id={id} videoData={videoData} />;
};

const mapStateToProps = (state) => ({
  id: state.videoList.id,
  videoData: state.sideRemoteControl.videoData,
});

export default connect(mapStateToProps)(VideoPlayerContainer);
