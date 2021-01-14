import React from "react";
import { Link } from "react-router-dom";
import "./Side.css";
const Side = () => {
  return (
    // <div className="side_bar">
    <div className="category_lists">
      {/* <ul className="category_lists"> */}
      <ul>
        <li>
          <Link className="category" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="category" to="/">
            ex)Season
          </Link>
        </li>
        <li>
          <Link className="category" to="/">
            ex)Water
          </Link>
        </li>
        <li>
          <Link className="category" to="/">
            ex)Fire
          </Link>
        </li>
        <li>
          <Link className="category" to="/">
            Favorite
          </Link>
        </li>
        <li>
          <Link className="category" to="/">
            Profie
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Side;
