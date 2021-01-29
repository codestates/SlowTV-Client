// 새로고침해도 상태 가지고 있게 만들기

import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ id, videoData }) => {
  const video = videoData.filter((data) => data.id === Number(id));

  return (
    <div className="video-player">
      <iframe className="player" src={video[0].contentlink}></iframe>
    </div>
  );
};

export default VideoPlayer;
