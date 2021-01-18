import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Side.css";
const Side = () => {
  return (
    <div className="side-links">
      <ul>
        <li>
          <Link className="side-Link" to="/contents">
            Contents
          </Link>
        </li>
        <li>
          <Link className="side-Link" to="/contents/water">
            Water
          </Link>
        </li>
        <li>
          <Link className="side-Link" to="/contents/fire">
            Fire
          </Link>
        </li>
        <li>
          <Link className="side-Link" to="/contents/snow">
            Snow
          </Link>
        </li>
        <li>
          <Link className="side-Link" to="/contents/grass">
            Grass
          </Link>
        </li>
        <li>
          <Link className="side-Link" to="/contents/favorite">
            Favorite
          </Link>
        </li>
        <li>
          <Link className="side-Link" to="/contents/profile">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Side);
