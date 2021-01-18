import React from "react";
import { connect } from "react-redux";
import VideoPlayer from "../components/VideoPlayer";

const VideoPlayerContainer = ({ id }) => {
  return <VideoPlayer id={id} />;
};

const mapStateToProps = (state) => ({
  id: state.contents.id,
});

export default connect(mapStateToProps)(VideoPlayerContainer);
