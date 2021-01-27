import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import FakeSide from "../Fake/FakeSide";
import FakeNav from "../Fake/FakeNav";
import Nav from "../Nav";
// import ThumbnailsContainer from "../../containers/ThumbnailsContainer";
// import HamburgerContainer from "../../containers/SideContainer";
import "./Water.css";
import { fakeData } from "../Fake/Fakedata.js";
import axios from "axios";
import VideoPlayer from "../VideoPlayer";
class fire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: "",
      arr: "",
    };
  }
  componentDidMount() {
    axios.get("https://server.slowtv24.com/category/fire").then((res) => {
      // console.log(this.state.video);
      this.setState({
        video: res.data.contents,
      });
      // console.log(res.data.contents);
      // console.log(this.state.video);
    });
  }
  handle = () => {
    this.setState({
      arr: this.state.video.map((el) => {
        return <VideoPlayer src={el.contentlink} key={el.id}></VideoPlayer>;
        // console.log(el)
        // return el.id;
      }),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handle}>버튼버튼버튼버튼버튼버튼버튼</button>
        {this.state.arr !== "" ? <div>{this.state.arr}</div> : null}
      </div>
    );
  }
}
export default fire;