import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// 페이크 파일

// 랜딩
import LandingContainer from "./containers/LandingContainer";
// 로그인 및 회원가입
// import Login from "./components/Login";
import LoginContainers from "./containers/LoginContainers";
// 컨텐츠
import ContentsContainer from "./containers/ContentsContainer";
// 컨텐츠 - 물,불,눈,풀
import WaterContainer from "./containers/WaterContainer";
import Fire from "./components/contents/Fire";
import Snow from "./components/contents/Snow";
import Grass from "./components/contents/Grass";
// 컨텐츠 - 즐겨찾기
import FavoritesContainer from "./containers/FavoritesContainer";
// 컨텐츠 - 프로필
import ProfileContainer from "./containers/ProfileContainer";
// 컨텐츠 - 프로필 - 이름 변경
import ChangeUserNameContainer from "./containers/ChangeUserNameContainer";
import ChangeUserPasswordContainer from "./containers/ChangeUserPasswordContainer";

// 비디오 플레이어
import VideoPlayerContainer from "./containers/VideoPlayerContainer";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

const App = () => {
  return (
    <Router>
      {/* 랜딩  ************************************************************/}
      <Route exact path="/" component={LandingContainer} />
      {/* 로그인 - 회원가입 ***************************************************/}
      <Route path="/login" component={LoginContainers} />
      {/* 컨텐츠 ************************************************************/}
      <Route path="/contents" component={ContentsContainer} exact />
      {/* 컨텐츠 - 물,불,눈,풀 */}
      <Route path="/contents/water" component={WaterContainer} />
      <Route path="/contents/fire" component={Fire} />
      <Route path="/contents/snow" component={Snow} />
      <Route path="/contents/grass" component={Grass} />
      {/* 컨텐츠- 즐겨찾기 */}
      <Route path="/contents/favorites" component={FavoritesContainer} />
      {/* 컨텐츠 - 프로필 */}
      <Route path="/contents/profile" component={ProfileContainer} exact />
      {/* 컨텐츠 - 프로필 - 이름 변경 */}
      <Route
        path="/contents/profile/update-username"
        component={ChangeUserNameContainer}
      />
      {/* 컨텐츠 - 프로필 - 비밀번호 변경********************************************/}
      <Route
        path="/contents/profile/update-password"
        component={ChangeUserPasswordContainer}
      />
      {/* 비디오 플레이어 *********************************************************/}
      <Route path="/watch" component={VideoPlayerContainer} />
      {/* <Route path="/watch" component={VideoPlayer} /> */}
      {/* test *********************************************************/}
      {/* <Route path="/test" component={ThumbnailsContainer} /> */}
    </Router>
  );
};

export default App;
