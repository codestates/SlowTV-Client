//! 사이드는 햄버거 있는 버전, FakeSide는 햄버거 없는 버전
import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./FakeSide.css";
const FakeSide = (props) => {
  // const FakeSide = ({ history }, props) => {
  //  const handleOnClick = (e) => {
  //     console.log("e.target.value>>>>", e.target.value);
  //    if (e.target.value) {
  //      history.push(`/contents/${e.target.value}`);
  //    } else {
  //      history.push("/");
  //    }
  //  };

  return (
    <div className="test-links">
      <ul>
        <li>
          <Link className="test-Link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="test-Link" to="/contents/water">
            Water
          </Link>
        </li>
        <li>
          <Link className="test-Link" to="/contents/fire">
            Fire
          </Link>
        </li>
        <li>
          <Link className="test-Link" to="/contents/snow">
            Snow
          </Link>
        </li>
        <li>
          <Link className="test-Link" to="/contents/grass">
            Grass
          </Link>
        </li>
        {props.a === false ?
          <>
            <li>
              <Link className="test-Link" to="/contents/favorite">
                Favorite
          </Link>
            </li>
            <li>
              <Link className="test-Link" to="/contents/profile">
                Profile
          </Link>
            </li>
          </>
          : <></>
        }
      </ul>
    </div >
  );
};

export default withRouter(FakeSide);
