import React, { useCallback } from "react";
import LandingNav from "../components/LandingNav";
import { connect, useSelector, useDispatch } from "react-redux";
import { changeSignIn, changeSignUp } from "../modules/login";

const LandingNavContainers = ({ changeSignIn, changeSignUp }) => {
  return <LandingNav changeSignIn={changeSignIn} changeSignUp={changeSignUp} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, props) => ({
  changeSignIn: () => {
    dispatch(changeSignIn());
  },
  changeSignUp: () => {
    dispatch(changeSignUp());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingNavContainers);
