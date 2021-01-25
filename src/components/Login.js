import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.css";
import axios from "axios";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nickname: "",
      errorMessage: "",
      githubAccessToken: "",
      googleAccessToken: "",
      isBtnClicked: false
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    //this.githubLoginHandler = this.githubLoginHandler(this); //<- 여기서 바인드 하면 /undefined 로 이동하면서 흰화면 나옴 그래서 아래에서직접 바인드 처리
    this.GITHUB_LOGIN_URL = "https://github.com/login/oauth/authorize?client_id=1193d67b72770285bd45";
    this.GOOGLE_LOGIN_URL = "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&response_type=code&redirect_uri=https://localhost:3000/login&client_id=242040920697-frojb1pu8dc0gcpvcll2kdh0h152br8c.apps.googleusercontent.com"
  }
  // SlowTV 서버로 authorization code 를 보내주고 토큰을 받으면  state 를 바꿔주는 함수------------------------------------------------------------------------------------------
  getAccessToken = (authorizationCode) => {
    axios.post(
      'https://mayweather24.com/callback-google', { authorizationCode }
    )
      .then((res) => {
        this.setState({
          googleAccessToken: res.data.accessToken
        })
      })
      .then((res) => { this.handleGetUserInfoSocial() })
    // .then((res)=> {
    // this.props.history.push("/login")
    //   this.handleGetUserInfoSocial()})
    // // 토큰으로 유저정보를 가져오는 것 까지 되었는데(구글) 상태 끌어올리기 못함
  }
  // 소셜로그인시 유저정보를 가져오는 함수(구글만 진행/ 상태 끌어올리기 못한 상태)----------------------------------------------------------------------------------
  handleGetUserInfoSocial = () => {
    console.log('엑세스토큰', this.state.googleAccessToken)
    axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${this.state.googleAccessToken}`
    )
      .then((res) => {
        console.log('엑세스 토큰으로 받아온 유저정보', res)
        return axios.post(
          "https://mayweather24.com/social-login",
          { email: res.data.email, nickname: res.data.name },
          { withCredentials: true }
        )
      }).then((res) => {
        console.log('소셜로그인 API로 온 응답(세션포함)', res)
        this.props.handleResponseSuccess();
        console.log('소셜로그인시 this.props', this.props)
        this.props.handleGetUserInfo()
        this.props.history.push("/contents");
      })
    //     let aaa = await axios.get(
    //   "https://mayweather24.com/userinfo",
    //   { withCredentials:true }
    // )
    //   console.log('/userinfo', aaa)
  }
  // 소셜로그인 버튼을 눌렀을 때 실행될  첫번째 함수 (사용자 동의를 구하는 페이지로 리디렉션)------------------------------------------------------------------------------------------
  handleGetGithubAuthorizationCode() {
    window.location.assign(this.GITHUB_LOGIN_URL);
  }
  handleGetGoogleAuthorizationCode() {
    window.location.assign(this.GOOGLE_LOGIN_URL);
  }
  //input에 들어가는 text 갱신 함수------------------------------------------------------------------------------------------
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  // 로그인 요청 함수------------------------------------------------------------------------------------------
  handleLogin = () => {
    const { email, password } = this.state;
    if (!this.state.email || !this.state.password) {
      this.setState({
        errorMessage: "Please check your email and password again.",
      });
    } else {
      axios
        .post(
          "https://server.slowtv24.com/login",
          { email: email, password: password },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("login post res>>>", res);
          console.log('일반로그인시 this.props', this.props)
          this.props.handleResponseSuccess(); // isLoggedin: true
          this.props.handleGetUserInfo(); // email, nickname
          this.props.history.push("/contents"); // 컨텐츠 페이지로 이동
        });
    }
  };
  // 회원가입 요청 함수------------------------------------------------------------------------------------------
  handleSignUp = () => {
    const { email, password, nickname } = this.state;
    if (!email || !password || !nickname) {
      this.setState({
        errorMessage: "Please check your email and password again.",
      });
    } else {
      axios
        .post(
          "https://server.slowtv24.com/signup",
          { email: email, password: password, nickname: nickname },
          { withCredentials: true }
        )
        .then((res) => {
          this.handleisBtnClickedLogin()
        });
    }
  };
  // 회원가입 화면 전환 함수------------------------------------------------------------------------------------------
  handleisBtnClickedLogin = () => {
    this.setState({
      isBtnClicked: false
    })
  }
  // 로그인 화면 전환 함수------------------------------------------------------------------------------------------
  handleisBtnClickedSignup = () => {
    this.setState({
      isBtnClicked: true
    })
  }
  // 렌딩이 끝난뒤 주소뒤에  authorization code가 붙어 있다면 그 값을 인자로  Access Token 을 받아오는 함수 실행
  componentDidMount() {
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code')
    console.log('어써리제이션코드', authorizationCode)
    if (authorizationCode) {
      this.getAccessToken(authorizationCode)
    }
  }
  // shouldComponentUpdate =() => {
  //   return true;
  // }
  // componentWillUpdate =() => {
  //   this.handleGetUserInfoSocial()
  // }
  render() {
    return (
      <div>
        {this.props.isOpen === false ? (
          <></>
        ) : (<div>
          {this.state.isBtnClicked === false ? (
            <div>
              <div className="login">
                <div className="login-half left">
                  <input
                    type="text"
                    placeholder="Enter email address"
                    onChange={this.handleInputValue("email")}
                  />
                  <input
                    type="password"
                    placeholder="Enter password"
                    onChange={this.handleInputValue("password")}
                  />
                  <button type="button" onClick={this.handleLogin}>
                    Login
              </button>
                </div>
                {/* <span className="bar bar-top"></span> */}
                <span className="login-or">OR</span>
                {/* <span className="bar bar-bottom"></span> */}
                <div className="login-half right">
                  <button
                    onClick={this.handleGetGithubAuthorizationCode.bind(this)}>
                    Login with GitHub
                </button>
                  <button
                    onClick={this.handleGetGoogleAuthorizationCode.bind(this)}>
                    Login with Gmail
                </button>
                  <button
                    onClick={this.handleisBtnClickedSignup}>
                    SignUp
                </button>
                </div>
              </div>
            </div>
          ) : (<div>
            <div className="login">
              <div className="login-half left">
                <input
                  type="text"
                  placeholder="Enter email address"
                  onChange={this.handleInputValue("email")}
                />
                <input
                  type="text"
                  placeholder="Enter nickname"
                  onChange={this.handleInputValue("nickname")}
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  onChange={this.handleInputValue("password")}
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  onChange={this.handleInputValue("password")}
                />
                <button type="button" onClick={this.handleSignUp}>
                  signUp
              </button>
              </div>
              {/* <span className="bar bar-top"></span> */}
              <span className="login-or">OR</span>
              {/* <span className="bar bar-bottom"></span> */}
              <div className="login-half right">
                <button type="button"
                  onClick={this.handleisBtnClickedLogin}>
                  Login
                </button>
              </div>
            </div>
          </div>
            )
          } </div>
          )}
      </div>
    );
  }
}
export default withRouter(Login);
// getAccessToken = async (authorizationCode) => {
//   let resgithub = await axios.post('https://mayweather24.com/callbackgit',{ authorizationCode })
//   let githubT = resgithub.data.accessToken
//   if(githubT){
//     this.setState({
//       githubAccessToken:githubT
//     })
//   }
//   let resgoogle = await axios.post('https://mayweather24.com/callbackgoogle',{ authorizationCode })
//   let googleT = resgoogle.data.accessToken
//   if (googleT) {
//     this.setState({ 
//       googleAccessToken: googleT,
//     })
//   }
//    this.handleGetUserInfoSocial() // 토큰으로 유저정보를 가져오는 것 까지 되었는데(구글) 상태 끌어올리기 못함
// }
// // 소셜로그인시 유저정보를 가져오는 함수(구글만 진행/ 상태 끌어올리기 못한 상태)----------------------------------------------------------------------------------
// handleGetUserInfoSocial = async () => {
//   let res = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${this.state.googleAccessToken}`)
//   let userinfo = res.data
//   console.log(userinfo.email)
//   let socialInfo = await axios.post(
//     "https://mayweather24.com/sociallogin",
//     {email:userinfo.email, nickname: userinfo.name},
//     {withCredentials:true}
//     )
//     this.props.handleGetUserInfo()
// //     console.log('소셜로그인', socialInfo) 
// //     let aaa = await axios.get(
// //   "https://mayweather24.com/userinfo",
// //   { withCredentials:true }
// // )
// //   console.log('/userinfo', aaa)
// }