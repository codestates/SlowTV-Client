// 새로고침해도 상태 가지고 있게 만들기

import React from "react";
import "./VideoPlayer.css";
import { fakeData } from "./Fake/Fakedata.js";
import { Link } from "react-router-dom";

const VideoPlayer = ({ id }) => {
  console.log("🚀 ~ file: VideoPlayer.js ~ line 16 ~ VideoPlayer ~ id", id);
  const a = fakeData.filter((data) => data.id === id);
  return (
    <div className="video-player">
      <div>
        <Link to="/contents">contents</Link>
      </div>
      <iframe className="player" src={a[0].snippet.url}></iframe>
      {/* <iframe
        className="player"
        // autoplay=1 자동 재생 안됨
        src="https://drive.google.com/file/d/1k7p4nsKV5HIaAHot9-nRJOjwUs_z3yRm/preview"
        // src="https://drive.google.com/file/d/19KUgHPQ_TX70y74ftW7tKLC1bAm6foqv/preview"
      ></iframe> */}

      {/* 이것도 되긴 함 */}
      {/* <embed src="https://drive.google.com/file/d/1k7p4nsKV5HIaAHot9-nRJOjwUs_z3yRm/preview"></embed> */}
    </div>
  );
};

export default VideoPlayer;
