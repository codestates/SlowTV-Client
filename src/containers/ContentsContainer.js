import React from "react";
import Contents from "../components/Contents";
import { connect } from "react-redux";

const ContentsContainer = ({ isModalClicked }) => {
  return <Contents isModalClicked={isModalClicked} />;
};

const mapStateToProps = (state) => ({
  isModalClicked: state.modal.isModalClicked,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContentsContainer);
