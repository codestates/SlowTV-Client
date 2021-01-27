//! 사이드는 햄버거 있는 버전, FakeSide는 햄버거 없는 버전
import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Side.css";
const Side = ({ handleOnClick, isClicked }, a) => {
  console.log("clicked >>", isClicked)

  return (
    // <i className={ isActive ? 'active' : 'notActive' }></i>
    <div className={isClicked ? "open-side-links" : "close-side-links"}>
      {/* 햄버거 메뉴 */}
      <div className="hamburger" onClick={handleOnClick}>
        <div className={!isClicked ? "burger" : "toggle burger"}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        {!isClicked ? (
          <div></div>
        ) : (
            <div className="side-category">
              <ul className="side-ul">
                <li>
                  <Link className="side-link" to="/contents">
                    Contents
                </Link>
                </li>
                <li>
                  <Link className="side-link" to="/contents/water">
                    Water
                </Link>
                </li>
                <li>
                  <Link className="side-link" to="/contents/fire">
                    Fire
                </Link>
                </li>
                <li>
                  <Link className="side-link" to="/contents/snow">
                    Snow
                </Link>
                </li>
                <li>
                  <Link className="side-link" to="/contents/grass">
                    Grass
                </Link>
                </li>
                {a === false ?
                  <>
                    <li>
                      <Link className="side-link" to="/contents/favorite">
                        Favorite
                </Link>
                    </li>
                    <li>
                      <Link className="side-link" to="/contents/profile">
                        Profile
                </Link>
                    </li>
                  </>
                  : <></>
                }
              </ul>
            </div>
          )}
      </div>
    </div >
  );
};

export default withRouter(Side);
