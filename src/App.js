//! for dev2
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingContainer from "./containers/LandingContainer";
import LoginContainers from "./containers/LoginContainers";
import ContentsContainer from "./containers/ContentsContainer";
import VideoListContainer from "./containers/VideoListContainer";
import FavoritesContainer from "./containers/FavoritesContainer";
import ProfileContainer from "./containers/ProfileContainer";
import ChangeUserNameContainer from "./containers/ChangeUserNameContainer";
import ChangeUserPasswordContainer from "./containers/ChangeUserPasswordContainer";
import VideoPlayerContainer from "./containers/VideoPlayerContainer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingContainer} />
      <Route path="/login" component={LoginContainers} />
      <Route path="/contents" component={ContentsContainer} exact />
      <Route path="/contents/water" component={VideoListContainer} />
      <Route path="/contents/fire" component={VideoListContainer} />
      <Route path="/contents/snow" component={VideoListContainer} />
      <Route path="/contents/grass" component={VideoListContainer} />
      <Route path="/contents/favorites" component={FavoritesContainer} />
      <Route path="/contents/profile" component={ProfileContainer} exact />
      <Route
        path="/contents/profile/update-username"
        component={ChangeUserNameContainer}
      />
      <Route
        path="/contents/profile/update-password"
        component={ChangeUserPasswordContainer}
      />
      <Route path="/watch" component={VideoPlayerContainer} />
    </Router>
  );
};

export default App;
