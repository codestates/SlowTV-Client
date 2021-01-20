import React from "react";

import { Link, withRouter } from "react-router-dom";

import "./FakeNav.css";

const Nav = ({ history }) => {
  const handleGoHome = () => {
    history.push("/");
  };
  return (
    <div className="fake-navbar">
      {/* <span className="fake-logo1" onClick={handleGoHome}> */}
      <span className="fake-test-logo" onClick={handleGoHome}>
        {/* SLOW<span className="fake-span-tv">TV</span> */}
        SLOWTV
      </span>
    </div>
  );
};

export default withRouter(Nav);
