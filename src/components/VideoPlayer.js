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
// // 새로고침해도 상태 가지고 있게 만들기
// /*eslint-disable*/ 
// // 2번줄은 eslint를 죽이는 기능
// import React from "react";
// import "./VideoPlayer.css";
// import { fakeData } from "./Fake/Fakedata.js";
// import { Link } from "react-router-dom";

// const VideoPlayer = ({ id }) => {
//   console.log("🚀 ~ file: VideoPlayer.js ~ line 16 ~ VideoPlayer ~ id", id);
//   const a = fakeData.filter((data) => data.id === id);
//   return (
//     <div className="video-player">
//       <div>
//         <Link to="/contents">contents</Link>
//       </div>
//       <iframe className="player" src={a[0].snippet.url}></iframe>
//       {/* <iframe
//         className="player"
//         // autoplay=1 자동 재생 안됨
//         src="https://drive.google.com/file/d/1k7p4nsKV5HIaAHot9-nRJOjwUs_z3yRm/preview"
//         // src="https://drive.google.com/file/d/19KUgHPQ_TX70y74ftW7tKLC1bAm6foqv/preview"
//       ></iframe> */}

//       {/* 이것도 되긴 함 */}
//       {/* <embed src="https://drive.google.com/file/d/1k7p4nsKV5HIaAHot9-nRJOjwUs_z3yRm/preview"></embed> */}
//     </div>
//   );
// };

// export default VideoPlayer;
