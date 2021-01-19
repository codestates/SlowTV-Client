import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./FakeSide.css";
const Side = ({ history }) => {
  //  const handleOnClick = (e) => {
  //     console.log("e.target.value>>>>", e.target.value);
  //    if (e.target.value) {
  //      history.push(`/contents/${e.target.value}`);
  //    } else {
  //      history.push("/");
  //    }
  //  };

  return (
    <div className="test-side-links">
      <ul>
        <li>
          <Link className="test-side-Link" to="/contents">
            Contents
          </Link>
        </li>
        <li>
          <Link className="test-side-Link" to="/contents/water">
            Water
          </Link>
        </li>
        <li>
          <Link className="test-side-Link" to="/contents/fire">
            Fire
          </Link>
        </li>
        <li>
          <Link className="test-side-Link" to="/contents/snow">
            Snow
          </Link>
        </li>
        <li>
          <Link className="test-side-Link" to="/contents/grass">
            Grass
          </Link>
        </li>
        <li>
          <Link className="test-side-Link" to="/contents/favorite">
            Favorite
          </Link>
        </li>
        <li>
          <Link className="test-side-Link" to="/contents/profile">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Side);

{
  /* 버튼 버전 */
}
{
  /* <div className="div-category">
        <button className="btn-category" onClick={handleOnClick}>
          Home
        </button>
      </div>
      <div className="div-category">
        <button className="btn-category" value="season" onClick={handleOnClick}>
          Season
        </button>
      </div>
      <div className="div-category">
        <button className="btn-category" value="water" onClick={handleOnClick}>
          Water
        </button>
      </div>
      <div className="div-category">
        <button className="btn-category" value="fire" onClick={handleOnClick}>
          Fire
        </button>
      </div>
      <div className="div-category">
        <button
          className="btn-category"
          value="favorite"
          onClick={handleOnClick}
        >
          Favorite
        </button>
      </div>
      <div className="div-category">
        <button
          className="btn-category"
          value="profile"
          onClick={handleOnClick}
        >
          Profile
        </button>
      </div>
    </div> */
}
