import React from "react";
import Water from "../components/contents/Water";
import { connect } from "react-redux";
import { click } from "../modules/contents";

const WaterContainer = ({ id, handleOnClick }) => {
  return <Water id={id} handleOnClick={handleOnClick} />;
};

const mapStateToProps = (state) => ({
  id: state.contents.id,
});

const mapDispatchToProps = (dispatch, props) => ({
  handleOnClick: (e) => {
    // 각 영상 아이디 얻어냄
    const id = e.target.attributes.value.value;
    // console.log("🚀 ~ file: ContentsContainer.js ~ line 23 ~ id", id);
    dispatch(click(id));
    props.history.push("/videoplayer");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WaterContainer);
