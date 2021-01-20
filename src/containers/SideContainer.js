import React from "react";
import Side from "../components/Side";
import { connect } from "react-redux";
import { click } from "../modules/hamburger";

const SideContainer = ({ isClicked, handleOnClick }) => {
  return <Side isClicked={isClicked} handleOnClick={handleOnClick} />;
};

const mapStateToProps = (state) => ({
  isClicked: state.hamburger.isClicked,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnClick: () => {
    // const test = document.getElementsByClassName("side-links");
    // console.log("🚀 ~ file: SideContainer.js ~ line 17 ~ test", test);
    // document.getElementsByClassName("side-links").classList("close-side-links");
    // document.getElementsByClassName("side-links").style.display = "none";
    dispatch(click());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideContainer);
