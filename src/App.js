import React from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import Contents from "./components/Contents";
import VideoPlayer from "./components/VideoPlayer";
import Login from "./components/Login"; //모달 구현 완료시 삭제예정

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/content" component={Contents} />
      <Route path="/watch" component={VideoPlayer} />
      <Route path="/login" component={Login} />
    </div>
  );
};

export default App;
