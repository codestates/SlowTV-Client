import React, { Component } from "react";
import Nav from "./Nav";

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing_page">
        <Nav />
        <button>Get Started!</button>
      </div>
    );
  }
}

export default LandingPage;
