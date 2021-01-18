import React from "react";
// import Contents from "./components/Contents";
import ContentsContainer from "./containers/ContentsContainer";
// import VideoPlayer from "./components/VideoPlayer";
import VideoPlayerContainer from "./containers/VideoPlayerContainer";
import SignUp from "./components/SignUp";
// import Season from "./components/contents/Season";
import SeasonCounter from "./containers/ContentsContainer";

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
      <Route path="/" component={FakeLanding} exact />
      <Route path="/videoplayer" component={VideoPlayerContainer} />
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
    </Router>
  );
};

export default App;
