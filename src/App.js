import React from "react";
import { Route } from "react-router-dom";
import Contents from "./components/Contents";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <div>
      <Route path="/content" component={Contents} />
      <Route path="/watch" component={VideoPlayer} />
    </div>
  );
};

export default App;
