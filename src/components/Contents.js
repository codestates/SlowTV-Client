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
  const handleOnChange = (e) => {
    let prevtest5 = document.querySelector(".contents_page_div_img_five");
    prevtest5.className = "contents_page_div_img_one";

    let prevtestText5 = document.querySelector(".contents_page_div_text_five");
    prevtestText5.className = "contents_page_div_text_one";

    let prevtest4 = document.querySelector(".contents_page_div_img_four");
    prevtest4.className = "contents_page_div_img_five";

    let prevtestText4 = document.querySelector(".contents_page_div_text_four");
    prevtestText4.className = "contents_page_div_text_five";

    let prevtest3 = document.querySelector(".contents_page_div_img_three");
    prevtest3.className = "contents_page_div_img_four";

    let prevtestText3 = document.querySelector(".contents_page_div_text_three");
    prevtestText3.className = "contents_page_div_text_four";

    let prevtest2 = document.querySelector(".contents_page_div_img_two");
    prevtest2.className = "contents_page_div_img_three";

    let prevtestText2 = document.querySelector(".contents_page_div_text_two");
    prevtestText2.className = "contents_page_div_text_three";

    let prevtest1 = document.querySelector(".contents_page_div_img_one");
    prevtest1.className = "contents_page_div_img_two";

    let prevtestText1 = document.querySelector(".contents_page_div_text_one");
    prevtestText1.className = "contents_page_div_text_two";
  };

  useEffect(() => {
    goToContentsPage();
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, []);

  const getAccessToken = async (authorizationCode) => {
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
    } else {
      const accessToken = await axios.post(
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

  useEffect(async () => {
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
    } else if (googleAccessToken !== null) {
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
    }
  }, [githubAccessToken, googleAccessToken]);

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
    }
  }, [email, nickname]);

  return (
    <div className="contents_page">
      <NavContainer />
      <SideRemoteControlContainer />

      {isModalClicked ? <ModalContainer /> : <div></div>}
      <div className="contents_page_container">
        <div className="contents_page_img_list">
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
          </div>

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

          <div className="contents_page_div_text_one">
            <div className="contents_page_text_first_phrase">Grass</div>
            <div className="contents_page_text_second_phrase">
              Just like watering your favorite plants
              <br />
              and giving them sunshine,
              <div className="contents_page_text_third_phrase">
                Take some time to take care of my mind.
              </div>
            </div>
          </div>

          <div className="contents_page_div_text_two">
            <div className="contents_page_text_first_phrase">Snow</div>
            <div className="contents_page_text_second_phrase">
              The colder the winter is, the greener <br></br>the leaves of the
              following spring.
              <div className="contents_page_text_third_phrase">
                The same goes for people.
              </div>
            </div>
          </div>

          <div className="contents_page_div_text_three">
            <div className="contents_page_text_first_phrase">Fire</div>
            <div className="contents_page_text_second_phrase">
              Like people gather in a warm fire.
              <br /> People gather even in a warm heart.
              <div className="contents_page_text_third_phrase">
                If your tired mind is cold, warm it up.
              </div>
            </div>
          </div>

          <div className="contents_page_div_text_four">
            <div className="contents_page_text_first_phrase">Water</div>
            <div className="contents_page_text_second_phrase">
              Life jumps like waves and repeats
              <br />
              itself for the better and the worse.
              <div className="contents_page_text_third_phrase">
                Be comforted by the waves.
              </div>
            </div>
          </div>

          {nickname ? (
            <div className="contents_page_div_text_five">
              <div className="contents_page_text_first_phrase">
                Hi, {nickname}
              </div>
              <div className="contents_page_text_second_phrase">
                Slow TV helps you feel the aesthetics <br />
                of slowness in your busy daily life.
                <div className="contents_page_text_third_phrase">
                  Leave your body to the flow of nature.
                </div>
              </div>
            </div>
          ) : (
            <div className="contents_page_div_text_five">
              <div className="contents_page_text_first_phrase">
                Welcome to Slow TV
              </div>
              <div className="contents_page_text_second_phrase">
                Slow TV helps you feel the aesthetics <br />
                of slowness in your busy daily life.
                <br />
                <div className="contents_page_text_third_phrase">
                  Leave your body to the flow of nature.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Contents);
