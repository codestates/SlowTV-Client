import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import SideRemoteControlContainer from "../containers/SideRemoteControlContainer";
import NavContainer from "../containers/NavContainer";
import ModalContainer from "../containers/ModalContainer";
import slowTvLogo1 from "../img/SLOW1.jpeg";
import axios from "axios";
import "./Contents.css";

const Contents = ({
  isModalClicked,
  isContentsPage,
  goToContentsPage,
  clickSignIn,
  githubAccessToken,
  googleAccessToken,
  getGithubAccessToken,
  getGoogleAccessToken,
  changeNickName,
  changeEmail,
  email,
  nickname,
  clickGetStarted,
  history,
}) => {
  // 슬라이드 이미지 누르면 클래스 이름 변경을 통해 css적용이 바뀌고 순서 변경이 되게 만드는 함수
  const handleOnChange = (e) => {
    // 카드 순서
    // 5->1
    let prevtest5 = document.querySelector(".contents_page_div_img_five");
    prevtest5.className = "contents_page_div_img_one";
    // 텍스트 카드
    let prevtestText5 = document.querySelector(".contents_page_div_text_five");
    prevtestText5.className = "contents_page_div_text_one";
    // 4-> 5
    let prevtest4 = document.querySelector(".contents_page_div_img_four");
    prevtest4.className = "contents_page_div_img_five";
    // 텍스트 카드
    let prevtestText4 = document.querySelector(".contents_page_div_text_four");
    prevtestText4.className = "contents_page_div_text_five";
    // 3->4
    let prevtest3 = document.querySelector(".contents_page_div_img_three");
    prevtest3.className = "contents_page_div_img_four";
    // 텍스트 카드
    let prevtestText3 = document.querySelector(".contents_page_div_text_three");
    prevtestText3.className = "contents_page_div_text_four";
    // 2->3
    let prevtest2 = document.querySelector(".contents_page_div_img_two");
    prevtest2.className = "contents_page_div_img_three";
    // 텍스트 카드
    let prevtestText2 = document.querySelector(".contents_page_div_text_two");
    prevtestText2.className = "contents_page_div_text_three";
    // 1->2
    let prevtest1 = document.querySelector(".contents_page_div_img_one");
    prevtest1.className = "contents_page_div_img_two";
    // 텍스트 카드
    let prevtestText1 = document.querySelector(".contents_page_div_text_one");
    prevtestText1.className = "contents_page_div_text_two";
  };

  // ! 컨텐츠 카드들 트랜지션
  useEffect(() => {
    goToContentsPage();
  });

  // ! 1. GET Authorization Cdoe
  useEffect(() => {
    const url = new URL(window.location.href); // 현재 페이지의 href (URL) 반환, 현재 주소에 ?code=[authorization code] 있음
    const authorizationCode = url.searchParams.get("code"); // 주소의 쿼리스트링에 있는 값을 가져오기 위해 사용
    if (authorizationCode) {
      // clickGetStarted();
      getAccessToken(authorizationCode);
    }
  }, []);

  // ! 2. GET Github, Google Access Token
  const getAccessToken = async (authorizationCode) => {
    // ! Github 길이 20, 리팩토링 필요함
    if (authorizationCode.length === 20) {
      const accessToken = await axios.post(
        "https://server.slowtv24.com/callback-git",
        {
          authorizationCode,
        },
        {
          withCredentials: true,
        }
      );
      if (accessToken) {
        clickSignIn();
        clickGetStarted();
        getGithubAccessToken(accessToken.data.accessToken);
      }
    }
    // ! Google 길이 20 넘음
    else {
      const accessToken = await axios.post(
        // "https://server.slowtv24.com/callbackgoogle",
        "https://server.slowtv24.com/callback-google",
        {
          authorizationCode,
        },
        {
          withCredentials: true,
        }
      );
      if (accessToken) {
        clickSignIn();
        clickGetStarted();
        getGoogleAccessToken(accessToken.data.accessToken);
      }
    }
  };

  // ! 3. 엑세스 토큰으로 정보 받아오기

  useEffect(async () => {
    // ! Github
    if (githubAccessToken !== null) {
      const githubUserInfo = await axios("https://api.github.com/user", {
        headers: {
          authorization: `token ${githubAccessToken}`,
        },
      });
      sessionStorage.setItem("email", githubUserInfo.data.login);
      sessionStorage.setItem("name", githubUserInfo.data.name);
      changeEmail(githubUserInfo.data.login);
      changeNickName(githubUserInfo.data.name);
      //! 로그인 페이지에서 로그인한 경우만 컨텐츠로 보내기, 나머지는 현재 페이지에 남아있게 하기
    } else if (googleAccessToken !== null) {
      // ! Google
      const googleUserInfo = await axios(
        "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
        {
          headers: {
            Authorization: `Bearer ${googleAccessToken}`,
          },
        }
      );
      sessionStorage.setItem("email", googleUserInfo.data.email);
      sessionStorage.setItem("name", googleUserInfo.data.name);
      changeEmail(googleUserInfo.data.email);
      changeNickName(googleUserInfo.data.name);
      //! 로그인 페이지에서 로그인한 경우만 컨텐츠로 보내기, 나머지는 현재 페이지에 남아있게 하기
    }
  }, [githubAccessToken, googleAccessToken]);

  // ! 4. 소셜도 세션 아이디 얻기 위해 서버로 이메일, 닉네임 전송
  useEffect(async () => {
    if (githubAccessToken || googleAccessToken) {
      const getSession = await axios.post(
        "https://server.slowtv24.com/social-login",
        {
          email,
          nickname,
        },
        {
          withCredentials: true,
        }
      );
      // ! 로그인 페이지에서 로그인한 게 아니면 해당 페이지 유지하도록 리팩토링
    }
  }, [email, nickname]);

  return (
    <div className="contents_page">
      <NavContainer />
      <SideRemoteControlContainer />
      {/* 컨텐츠 페이지 시작 */}
      {/* 컨텐츠 페이지 컨테이너 */}
      {isModalClicked ? <ModalContainer /> : <div></div>}
      <div className="contents_page_container">
        {/* 컨텐츠 페이지 이미지 담는 디브*/}
        <div className="contents_page_img_list">
          {/* grass */}
          <div
            className={
              isContentsPage
                ? "contents_page_div_img_one"
                : "contents_page_div_img_ready"
            }
          >
            <img
              className="contents_page_img"
              value="grass"
              onClick={handleOnChange}
              src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Grass"
            ></img>
          </div>
          {/* snow */}
          <div
            className={
              isContentsPage
                ? "contents_page_div_img_two"
                : "contents_page_div_img_ready"
            }
          >
            <img
              className="contents_page_img"
              value="snow"
              onClick={handleOnChange}
              src="https://images.unsplash.com/photo-1543751737-d7cf492060cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNub3d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Snow"
            ></img>
          </div>
          {/* fire */}
          <div
            className={
              isContentsPage
                ? "contents_page_div_img_three"
                : "contents_page_div_img_ready"
            }
          >
            <img
              className="contents_page_img"
              value="fire"
              onClick={handleOnChange}
              src="https://images.unsplash.com/photo-1534246357846-40b500934c14?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGZpcmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Fire"
            ></img>
          </div>
          {/* water */}
          <div
            className={
              isContentsPage
                ? "contents_page_div_img_four"
                : "contents_page_div_img_ready"
            }
          >
            <img
              className="contents_page_img"
              value="water"
              onClick={handleOnChange}
              src="https://images.unsplash.com/photo-1457195740896-7f345efef228?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Water"
            ></img>
            {/* SLOW TV; */}
          </div>

          {/* //! test */}
          <div
            className={
              isContentsPage
                ? "contents_page_div_img_five"
                : "contents_page_div_img_ready"
            }
          >
            <img
              className="contents_page_img"
              value="logo"
              onClick={handleOnChange}
              src={slowTvLogo1}
              alt="Slow TV"
            ></img>
          </div>
          {/* contents_page_div_img_one 텍스트*/}
          <div className="contents_page_div_text_one">
            <div className="contents_page_text">
              Grass <p></p>
              Stress less,<p></p>
              Live better.
            </div>
          </div>
          {/* contents_page_div_img_two 텍스트*/}
          <div className="contents_page_div_text_two">
            <div className="contents_page_text">
              Snow <p></p>
              Stress less,<p></p>
              Live better.
            </div>
          </div>
          {/* contents_page_div_img_three 텍스트*/}
          <div className="contents_page_div_text_three">
            <div className="contents_page_text">
              Fire <p></p>
              Stress less,<p></p>
              Live better.
            </div>
          </div>
          {/* contents_page_div_img_four 텍스트*/}
          <div className="contents_page_div_text_four">
            <div className="contents_page_text">
              Water<p></p>
              Stress less,<p></p>
              Live better.
            </div>
          </div>
          {/* contents_page_div_img_five 텍스트*/}
          <div className="contents_page_div_text_five">
            <div className="contents_page_text">
              Sleep more, <p></p>
              Stress less,<p></p>
              Live better.
            </div>
          </div>
        </div>
        {/* 이미지 끝 */}
      </div>
    </div>
  );
};

export default withRouter(Contents);
