import React from "react";
import { Route } from "react-router-dom";
import Contents from "./components/Contents";
import VideoPlayer from "./components/VideoPlayer";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div>
      <Route path="/contents" component={Contents} />
      <Route path="/watch" component={VideoPlayer} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
};

export default App;
