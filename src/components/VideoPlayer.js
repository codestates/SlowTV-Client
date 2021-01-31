import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ id, videoData }) => {
  const video = videoData.filter((data) => data.id === Number(id));

  return (
    <div className="video-player">
      <iframe
        className="player"
        src={video[0].contentlink}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
