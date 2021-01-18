import React from "react";
import { Link, withRouter } from "react-router-dom";
import Side from "./Side";
import FakeNav from "./FakeNav";
import "./FakeLanding.css";
import { fakeData } from "../Fakedata.js";

const FakeLanding = ({ id, handleOnClick, history }) => {
  const testHandleOnClick = () => {
    history.push("/contents");
  };

  return (
    <div>
      <div className="category_page">
        {/* <FakeNav />
        <Side /> */}
        <div className="container">
          <div className="navbar">
            <div className="menu">
              <h3 className="logo">
                Slow<span>TV</span>
              </h3>
              {/* <div className="hamburger-menu">
                <div className="bar"></div>
              </div> */}
            </div>
          </div>

          <div className="main-container">
            <div className="main">
              <header>
                <div className="overlay">
                  <div className="inner">
                    <h2 className="title">Slow TV</h2>
                    <div className="p">R.S.C</div>
                    <button className="btn" onClick={testHandleOnClick}>
                      Get started
                    </button>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeLanding;
