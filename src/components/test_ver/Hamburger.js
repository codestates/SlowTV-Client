import React from "react";
import "./Hamburger.css";

const Hamburger = () => {
  return (
    <div>
      <div className="hamburger">
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="toggle burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Hamburger;
