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
      reconfirmPassword:"",
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
  getAccessToken = async (authorizationCode) => {
  let resgithub = await axios.post('https://server.slowtv24.com/callback-git',{ authorizationCode })
  let githubT = resgithub.data.accessToken
  if(githubT){
    console.log('깃헙 엑세스토큰 가져오기 성공')
    this.setState({
      githubAccessToken:githubT
    })
    this.handleGetUserInfoSocial()
  }
  let resgoogle = await axios.post('https://server.slowtv24.com/callback-google',{ authorizationCode })
  let googleT = resgoogle.data.accessToken
  if (googleT) {
    this.setState({ 
      googleAccessToken: googleT,
    })
    this.handleGetUserInfoSocial()
  }
}

  // 소셜로그인시 유저정보를 가져오는 함수(구글만 진행/ 상태 끌어올리기 못한 상태)----------------------------------------------------------------------------------
  handleGetUserInfoSocial = () => {
    if(this.state.googleAccessToken) {
      console.log('구글 유저정보 가져오기 start')
    axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${this.state.googleAccessToken}`
    )
      .then((res) => {
        console.log('엑세스 토큰으로 받아온 유저정보', res)
        return axios.post(
          "https://server.slowtv24.com/social-login",
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
    } else {
      console.log('깃헙 유저정보 가져오기 start')
      axios.get('https://api.github.com/user', {
        headers: {
          authorization: `token ${this.state.githubAccessToken}`,
        }
      })
      .then((res)=> {
        console.log('깃헙 유저 정보', res.data.login, res.data.html_url)
        return axios.post(
          "https://server.slowtv24.com/social-login",
          { email: res.data.html_url, nickname: res.data.login },
          { withCredentials: true }
        )
      }).then((res) => {
        console.log('소셜로그인 API로 온 응답(세션포함)', res)
        this.props.handleResponseSuccess();
        console.log('소셜로그인시 this.props', this.props)
        this.props.handleGetUserInfo()
        this.props.history.push("/contents");
      })
    }
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
    const { email, nickname, password, reconfirmPassword } = this.state;
    if (!email || !password || !nickname || !reconfirmPassword) {
      this.setState({
        errorMessage: "You must fill in all blanks to proceed.",
      });
    } else {
      if(  password === reconfirmPassword) {
      axios
        .post(
          "https://server.slowtv24.com/signup",
          { email: email, password: password, nickname: nickname },
          { withCredentials: true }
        )
        .then((res) => {
          this.handleisBtnClickedLogin()
        });
    } else {
      this.setState({
        errorMessage: "Reconfirmation password mismatch",
      });
    }
  }
  };
  // 회원가입 -> 로그인 화면 전환 ------------------------------------------------------------------------------------------
  handleisBtnClickedLogin = () => {
    this.setState({
      isBtnClicked: false
    })
  }
  // 로그인 -> 회원가입 화면 전환------------------------------------------------------------------------------------------
  handleisBtnClickedSignup = () => {
    this.setState({
      isBtnClicked: true
    })
  }

  //로그인 창 닫기 버튼 클릭시------------------------------------------------------------------------------------------

  // 렌딩이 끝난뒤 주소뒤에  authorization code가 붙어 있다면 그 값을 인자로  Access Token 을 받아오는 함수 실행
  componentDidMount() {
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code')
    console.log('어써리제이션코드', authorizationCode)
    if (authorizationCode) {
      this.getAccessToken(authorizationCode)
    }
  }
  render() {
    return (
      <div>
        {this.props.isOpen === false ? (
          <></>
        ) : (<div>
          {this.state.isBtnClicked === false ? (
            <div>
{/*----------------------------------------------------- 로그인 페이지 */}
              <div className="login">
                <div className="login-half left">
                <button className='loginClose' type="button" onClick={this.props.handleModalClose}>
                    Close
              </button>
{/* 이메일 입력창 */}
                  <input 
                    className="userinfoInput"
                    type="text"
                    placeholder="Enter email address"
                    onChange={this.handleInputValue("email")}
                  />
                  <div>{/*줄바꿈을 위해서 추가*/}</div> 
{/* 패스워드 입력창 */}
                  <input className="userinfoInput"
                    type="password"
                    placeholder="Enter password"
                    onChange={this.handleInputValue("password")}
                  />
                  <div>{/*줄바꿈을 위해서 추가*/}</div> 
{/* 로그인 버튼 */}
                  <button className='loginBtn' type="button" onClick={this.handleLogin}>
                    Login
              </button>
                </div>
                {/* <span className="bar bar-top"></span> */}
                {/* <span className="login-or">OR</span> */}
                {/* <span className="bar bar-bottom"></span> */}
                <div className="login-half right">
{/* 깃헙 소셜로그인 버튼 */}
                  <button 
                    className='loginBtn'
                    onClick={this.handleGetGithubAuthorizationCode.bind(this)}>
                    Login with GitHub
                </button>
{/* 구글 소셜로그인 버튼 */}
                  <button className='loginBtn'
                    onClick={this.handleGetGoogleAuthorizationCode.bind(this)}>
                    Login with Gmail
                </button>
{/* 회원 가입하러가기 버튼 */}
                  <button className='signupBtn'
                    onClick={this.handleisBtnClickedSignup}>
                    Let's go to SignUp!
                </button>
                <div>{this.state.errorMessage}</div>
                </div>
              </div>
            </div>
          ) : (<div>
{/* -----------------------------------------------------회원가입 페이지 */}
            <div className="login">
              <div className="login-half left">
              <button className='loginClose' type="button" onClick={this.props.handleModalClose}>
                    Close
              </button>
{/* 이메일 입력창 */}
                <input className="signupInput"
                  type="text"
                  placeholder="Enter email address"
                  onChange={this.handleInputValue("email")}
                />
                <div>{/*줄바꿈을 위해서 추가*/}</div> 
{/* 닉네임 입력창 */}
                <input className="signupInput"
                  type="text"
                  placeholder="Enter nickname"
                  onChange={this.handleInputValue("nickname")}
                />
                <div>{/*줄바꿈을 위해서 추가*/}</div> 
{/* 비밀번호 입력창 */}
                <input className="signupInput"
                  type="password"
                  placeholder="Enter password"
                  onChange={this.handleInputValue("password")}
                />
                <div>{/*줄바꿈을 위해서 추가*/}</div> 
{/* 비밀번호 재입력창 */}
                <input className="signupInput"
                  type="password"
                  placeholder="Check your password"
                  onChange={this.handleInputValue("reconfirmPassword")}
                />
{/* 회원가입 버튼 */}
                <button className='signupBtn' type="button" onClick={this.handleSignUp}>
                  signUp
              </button>
              </div>
              {/* <span className="bar bar-top"></span> */}
              {/* <span className="login-or">OR</span> */}
              {/* <span className="bar bar-bottom"></span> */}
              <div className="login-half right">
{/* 로그인 화면가기 버튼 */}
                <button className='loginBtn' type="button"
                  onClick={this.handleisBtnClickedLogin}>
                  Login
                </button>
{/* 유효성 검사 문구 */}
                <div>{this.state.errorMessage}</div>
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
