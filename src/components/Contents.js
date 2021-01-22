import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Contents.css";
import FakeSide from "./Fake/FakeSide";
// import { fakeData } from "../Fakedata.js";

const Contents = (props) => {
  // 상태 변경 함수가 아니라서 일단 컨테이너 파일이 아닌 프레젠테이셔널 파일에서 작성했습니다
  // SLOW TV 로고 누르면 홈으로
  // const handleGoHome = () => {
  //   history.push("/");
  // };

  // 상태 변경 함수가 아니라서 일단 컨테이너 파일이 아닌 프레젠테이셔널 파일에서 작성했습니다
  // 슬라이드 이미지 누르면 클래스 이름 변경을 통해 css적용이 바뀌고 순서 변경이 되게 만드는 함수
  const handleOnChange = (e) => {
    // console.log("e.target.attributes>>>", e.target);
    // let className = Number(e.target.attributes.value.value);
    // console.log(
    //   "🚀 ~ file: Contents.js ~ line 19 ~ handleOnChange ~ className",
    //   className
    // );

    // 카드 순서
    // 5->1
    let prevtest5 = document.querySelector(".div-img-five");
    prevtest5.className = "div-img-one";

    // 4-> 5

    let prevtest4 = document.querySelector(".div-img-four");
    prevtest4.className = "div-img-five";

    // 3->4
    let prevtest3 = document.querySelector(".div-img-three");
    prevtest3.className = "div-img-four";

    // 2->3
    let prevtest2 = document.querySelector(".div-img-two");
    prevtest2.className = "div-img-three";

    // 1->2
    let prevtest1 = document.querySelector(".div-img-one");
    prevtest1.className = "div-img-two";
  };

  return (
    <div>
      <div className="container">
        <div className="content-navbar">
          {/* <h3 className="logo1" onClick={handleGoHome}> */}
            SLOW<span>TV</span>
          {/* </h3> */}
        </div>

        {/* test */}
        <div className="contents">
          <div className="img_list">
            {/* grass */}
            <div className="div-img-one">
              <img
                className="content-img"
                value="grass"
                onClick={handleOnChange}
                src="https://images.unsplash.com/photo-1438786657495-640937046d18?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Z3Jhc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Grass"
              ></img>
            </div>
            {/* snow */}
            <div className="div-img-two">
              <img
                className="content-img"
                value="snow"
                onClick={handleOnChange}
                src="https://images.unsplash.com/photo-1476108621677-3c620901b5e7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Snow"
              ></img>
            </div>
            {/* fire */}
            <div className="div-img-three">
              <img
                className="content-img"
                value="fire"
                onClick={handleOnChange}
                src="https://images.unsplash.com/photo-1538487865197-679f89c6fb0b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGNhbXBmaXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Fire"
              ></img>
            </div>
            {/* water */}
            <div className="div-img-four">
              <img
                className="content-img"
                value="water"
                onClick={handleOnChange}
                src="https://images.unsplash.com/photo-1433740944490-b669cb8b1c44?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Water"
              ></img>
              {/* SLOW TV; */}
            </div>
            <div className="div-img-five">
              <img
                className="content-img"
                value="logo"
                // onClick={handleOnClick}
                onClick={handleOnChange}
                src="data:image/png;base64,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"
                alt="Slow TV"
              ></img>
            </div>
          </div>
        </div>
        {/* test */}
        {/* <Side /> */}
        <FakeSide a={props.a} />
      </div>
    </div>
  );
};

export default withRouter(Contents);
