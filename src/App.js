//dev2
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
// 페이크 파일
import FakeLanding from "./components/Fake/FakeLanding";
import FakeFavorite from "./components/Fake/FakeFavorite";
// 랜딩
import Landing from "./components/Landing";
// 로그인 - 회원가입
import Login from "./components/Login"; //모달 구현 완료시 삭제예정
import SignUp from "./components/SignUp";
// 컨텐츠
import Contents from "./components/Contents";

// 컨텐츠 - 물,불,눈,풀
import Water from "./components/contents/Water";

import Fire from "./components/contents/Fire";
import Snow from "./components/contents/Snow";
import Grass from "./components/contents/Grass";
// 컨텐츠 - 즐겨찾기
import Favorites from "./components/Favorites";
// 컨텐츠 - 프로필 모달
import Profile from "./components/contents/Profile";
// import ChangeUsername from "./components/contents/ChangeUsername";
// import ChangePassword from "./components/contents/ChangePassword";
// 비디오 플레이어
import VideoPlayer from "./components/VideoPlayer";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
      favVideos: [],
      email: "",
      nickname: "",
      isModalOpen: "",
      userInfo: "",
      isClickedSignInToggle: "",
      videoId: "",
      isLogoutModalOpen: false,
      seletedVideoLink: "",
    };
    this.handleResponseSuccess = this.handleResponseSuccess.bind(this);
    this.handleGetUserInfo = this.handleGetUserInfo.bind(this);
    this.handlefavorites = this.handlefavorites.bind(this);
  }

  // handleLoggedin = (email, password, errorMessage) => {
  //   if (!email || !password) {
  //     this.setState({
  //       errorMessage: "Please check your email and password again.",
  //     });
  //   } else {
  //     axios
  //       .post(
  //         "https://server.slowtv24.com/login",
  //         // "https://server.slowtv24.com/login",
  //         { email: email, password: password },
  //         { withCredentials: true }
  //       )
  //       .then((res) => {
  //         console.log("login post res>>>", res);
  //         // console.log("data.nickname>>", res.data.nickname)
  //         this.handleResponseSuccess();
  //         // this.props.setUserInfo(res);
  //         axios.get("https://server.slowtv24.com/favorites",
  //           { withCredentials: true })
  //           .then((data) => {
  //             // console.log("axios favorites data.userfavorite >>>", data.data.userFavorites)
  //             this.setState({
  //               favorites: data.data.userFavorites
  //             })
  //           })
  //       })
  //       .catch((err) => alert(err));
  //   }
  // };
  handleSeletedVideo = (link) => {
    this.setState({
      seletedVideoLink: link,
    });
    this.props.history.push("/watch");
  };

  handlefavorites() {
    axios
      .get("https://server.slowtv24.com/favorites", { withCredentials: true })
      .then((data) => {
        console.log("APP axios favorites data.data >>>", data.data);
        if (data.data.messages) {
          console.log("inside if data.data>>>.", data.data);
          this.setState({
            favVideos: [],
          });
        }
        this.setState({
          favVideos: data.data.userFavorites,
        });
      });
    // .catch((err) => {
    //   console.log(err)
    // })
  }

  // [완료]로그인 이후->서버에  유저정보 요청 -> App.js 의 상태 : email, nickname 바꿈(상태 끌어올리기)
  handleGetUserInfo() {
    //경로 -> App.js -> Landing.js -> Nav.js -> Login.js
    axios
      .get("https://server.slowtv24.com/userinfo", { withCredentials: true })
      .then((res) => {
        console.log("/userinfo", res.data);
        this.setState({
          email: res.data.userInfo.email,
          nickname: res.data.userInfo.nickname,
        });
      });
  }

  handleOpenModal = () => {};
  handleSignInToggle = () => {};
  handleVideoId = () => {};

  handleLogout = () => {
    axios
      .post("https://server.slowtv24.com/logout", null, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        this.setState({
          isLoggedin: false,
        });
        this.handleLogoutModalClose();
      })
      .catch((err) => err);
  };

  handleLogoutModalOpen = () => {
    this.setState({ isLogoutModalOpen: true });
  };
  handleLogoutModalClose = () => {
    this.setState({ isLogoutModalOpen: false });
  };

  handleResponseSuccess() {
    this.setState({
      isLoggedin: true,
    });
  }

  handleOpenLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <Router>
        {/* 페이크 */}
        {/* <Route path="/" component={FakeLanding} exact /> */}
        {/* <Route path="/contents/favorite" component={FakeFavorite} /> */}
        {/* 랜딩  ************************************************************/}
        <Route
          exact
          path="/"
          render={() => (
            <Landing
              handleResponseSuccess={this.handleResponseSuccess}
              isLoggedin={this.state.isLoggedin}
              // handleLoggedin={this.handleLoggedin}
              handleGetUserInfo={this.handleGetUserInfo}
              email={this.state.email}
              nickname={this.state.nickname}
              handleLogout={this.handleLogout}
              handleLogoutModalOpen={this.handleLogoutModalOpen}
              handleLogoutModalClose={this.handleLogoutModalClose}
              isLogoutModalOpen={this.state.isLogoutModalOpen}
              handleOpenLogin={this.handleOpenLogin}
            />
          )}
        />
        {/* 로그인 - 회원가입 ***************************************************/}
        <Route
          path="/login"
          render={() => (
            // <Login isLoggedin={this.state.isLoggedin} favorites={this.state.favorites} handleLoggedin={this.handleLoggedin} handleResponseSuccess={this.handleResponseSuccess} />)} />
            <Login
              handleResponseSuccess={this.handleResponseSuccess}
              isLoggedin={this.state.isLoggedin}
              handleGetUserInfo={this.handleGetUserInfo}
              email={this.state.email}
              nickname={this.state.nickname}
            />
          )}
        />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/signup" component={SignUp} />
        {/* 컨텐츠 ************************************************************/}
        <Route
          exact
          path="/contents"
          render={() => (
            <Contents
              isLoggedin={this.state.isLoggedin}
              handlefavorites={this.handlefavorites}
              favVideos={this.state.favVideos}
              handleSeletedVideo={this.handleSeletedVideo}
            />
          )}
        />
        {/* <Route path="/contents" component={ContentsContainer} exact /> */}
        {/* 컨텐츠 - 물,불,눈,풀 */}
        <Route path="/contents/water" component={Water} />
        <Route path="/contents/fire" component={Fire} />
        <Route path="/contents/snow" component={Snow} />
        <Route path="/contents/grass" component={Grass} />
        {/* 컨텐츠- 즐겨찾기 */}
        <Route
          path="/contents/favorites"
          render={() => (
            <Favorites
              isLoggedin={this.state.isLoggedin}
              handlefavorites={this.handlefavorites}
              favVideos={this.state.favVideos}
              handleSeletedVideo={this.handleSeletedVideo}
            />
          )}
        />
        {/* 컨텐츠 - 프로필 */}
        <Route path="/contents/profile" component={Profile} exact />
        {/* 컨텐츠 - 프로필 - 이름 변경 */}
        {/* <Route
        path="/contents/profile/change-username"
        component={ChangeUsername}
      /> */}
        {/* 컨텐츠 - 프로필 - 비밀번호 변경********************************************/}
        {/* <Route
        path="/contents/profile/change-password"
        component={ChangePassword}
      /> */}
        {/* 비디오 플레이어 *********************************************************/}
        <Route
          path="/watch"
          render={() => (
            <VideoPlayer seletedVideoLink={this.state.seletedVideoLink} />
          )}
        />
      </Router>
    );
  }
}

export default withRouter(App);
