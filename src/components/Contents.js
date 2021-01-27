import React, { useState, useEffect } from "react";
import SideRemoteControlContainer from "../containers/SideRemoteControlContainer";
import NavContainer from "../containers/NavContainer";
import ModalContainer from "../containers/ModalContainer";
import slowTvLogo1 from "../img/SLOW1.jpeg";
import "./Contents.css";

const Contents = ({ isModalClicked }) => {
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

  const [isContentsPage, setIsContentsPage] = useState(false);

  useEffect(() => {
    setIsContentsPage(true);
  });
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
              src="https://images.unsplash.com/photo-1438786657495-640937046d18?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Z3Jhc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
              src="https://images.unsplash.com/photo-1476108621677-3c620901b5e7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
              src="https://images.unsplash.com/photo-1538487865197-679f89c6fb0b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGNhbXBmaXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
              src="https://images.unsplash.com/photo-1433740944490-b669cb8b1c44?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
            {/* <div className="contents_page_div_img_five"> */}
            <img
              className="contents_page_img"
              value="logo"
              // onClick={handleOnClick}
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

export default Contents;
