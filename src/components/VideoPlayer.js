// 새로고침해도 상태 가지고 있게 만들기

import React from "react";
import "./VideoPlayer.css";
import { fakeData } from "./Fake/Fakedata.js";
import { Link } from "react-router-dom";
import axios from "axios";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video:
        "https://drive.google.com/file/d/1k7p4nsKV5HIaAHot9-nRJOjwUs_z3yRm/preview",
    };
  }

  handleSearchVideo = () => {
    axios.get("https://server.slowtv24.com/category/fire").then((res) => {
      console.log(res);
      this.setState({
        video: res.data.contents[0].contentlink,
      });
    });
  };

  render() {
    return (
      <div className="video-player">
        <button onClick={this.handleSearchVideo}>버튼</button>
        {/* <iframe
          className="player"
          src="https://drive.google.com/file/d/1k7p4nsKV5HIaAHot9-nRJOjwUs_z3yRm/preview"
        ></iframe> */}
        <iframe className="player" src={this.props.src}></iframe>
        {/* 어디에서 상태를 내려받아야할지 모르겠음 컨텐츠 파일을 내려받은 뒤 상태 적용 */}
        {/* app.js  state에서 비디오 선택한 값을 내려받아서 비디오에 소스를 props로 넣어줌 */}
        <div className="backToTheContents">
          <Link to="/contents" className="link">
            contents
          </Link>
          <br></br>
          <Link to="/contents/water" className="link">
            water
          </Link>
          <br></br>
          <Link to="/contents/fire" className="link">
            fire
          </Link>
          <br></br>
          <span>
            <Link to="/contents/snow" className="link">
              snow
            </Link>
          </span>
          <br></br>
          <Link to="/contents/grass" className="link">
            grass
          </Link>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
