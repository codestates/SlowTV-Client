import React from "react";
// import Contents from "./components/Contents";
import ContentsContainer from "./containers/ContentsContainer";
// import VideoPlayer from "./components/VideoPlayer";
import VideoPlayerContainer from "./containers/VideoPlayerContainer";

import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import VideoPlayer from "./components/VideoPlayer";
import Login from "./components/Login"; //모달 구현 완료시 삭제예정
import SignUp from "./components/SignUp";

// 물,불,눈,풀
// import Water from "./components/contents/Water";
import WaterContainer from "./containers/WaterContainer";
import Fire from "./components/contents/Fire";
import Snow from "./components/contents/Snow";
import Grass from "./components/contents/Grass";
// 즐겨찾기
import Favorite from "./components/contents/FakeFavorite";
// import Profile from "./components/contents/Profile";
import ProfileContainer from "./containers/ProfileContainer";
import ChangeUsername from "./components/contents/ChangeUsername";
import ChangePassword from "./components/contents/ChangePassword";
import FakeLanding from "./components/FakeLanding";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      //<Route path="/" component={FakeLanding} exact />
      //<Route path="/videoplayer" component={VideoPlayerContainer} />
      {/* <Route path="/signup" component={SignUp} /> */}
      <Route path="/contents" component={ContentsContainer} exact />
      <Route path="/contents/season" component={SeasonCounter} />
      {/* 물,불,눈,풀 */}
      {/* <Route path="/contents/water" component={Water} /> */}
      <Route path="/contents/water" component={WaterContainer} />
      <Route path="/contents/fire" component={Fire} />
      <Route path="/contents/snow" component={Snow} />
      <Route path="/contents/grass" component={Grass} />
      {/* 즐겨찾기 */}
      <Route path="/contents/favorite" component={Favorite} />
      <Route path="/contents/profile" component={ProfileContainer} exact />
      <Route
        path="/contents/profile/change-username"
        component={ChangeUsername}
      />
      <Route
        path="/contents/profile/change-password"
        component={ChangePassword}
      />
       <Route exact path="/" component={Landing} />
      <Route path="/watch" component={VideoPlayer} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default App;
