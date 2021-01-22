import React from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
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
import ContentsContainer from "./containers/ContentsContainer";
// 컨텐츠 - 물,불,눈,풀
import WaterContainer from "./containers/WaterContainer";
import Fire from "./components/contents/Fire";
import Snow from "./components/contents/Snow";
import Grass from "./components/contents/Grass";
// 컨텐츠 - 즐겨찾기
import Favorite from "./components/Fake/FakeFavorite";
// 컨텐츠 - 프로필 모달 버전
import ProfileContainer from "./containers/ProfileContainer";
// 컨텐츠 - 프로필 모달 페에지 이동 버전
// import ChangeUsername from "./components/contents/ChangeUsername";
// import ChangePassword from "./components/contents/ChangePassword";
// 비디오 플레이어
import VideoPlayerContainer from "./containers/VideoPlayerContainer";
import VideoPlayer from "./components/VideoPlayer";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    }
    this.handleResponseSuccess = this.handleResponseSuccess.bind(this);
  };

  handleResponseSuccess() {
    this.setState({
      isLoggedin: true,
    })
  }
  render() {
    return (
      <Router>
        {/* 페이크 */}
        {/* <Route path="/" component={FakeLanding} exact /> */}
        <Route path="/contents/favorite" component={FakeFavorite} />
        {/* 랜딩  ************************************************************/}
        <Route exact path="/" render={() => <Landing handleResponseSuccess={this.handleResponseSuccess} isLoggedin={this.state.isLoggedin} />} />
        {/* 로그인 - 회원가입 ***************************************************/}
        < Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        {/* 컨텐츠 ************************************************************/}
        <Route exact path="/contents" render={() => <Contents a={this.state.isLoggedin} />} />
        {/* <Route path="/contents" component={ContentsContainer} exact /> */}
        {/* 컨텐츠 - 물,불,눈,풀 */}
        < Route path="/contents/water" component={WaterContainer} />
        <Route path="/contents/fire" component={Fire} />
        <Route path="/contents/snow" component={Snow} />
        <Route path="/contents/grass" component={Grass} />
        {/* 컨텐츠- 즐겨찾기 */}
        {/* <Route path="/contents/favorite" component={Favorite} /> *********/}
        {/* 컨텐츠 - 프로필 모달 버전 */}
        <Route path="/contents/profile" component={ProfileContainer} exact />
        {/* 컨텐츠 - 프로필 페이지 이동 버전*/}
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
        <Route path="/watch" component={VideoPlayerContainer} />
        {/* <Route path="/watch" component={VideoPlayer} /> */}
        {/* test *********************************************************/}
        {/* <Route path="/test" component={ThumbnailsContainer} /> */}
      </Router>
    )
  };
};

export default withRouter(App);
