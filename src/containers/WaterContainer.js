// ! test중이라 Water에서만 사용하지만 추후 파일명도 변경해서 Water, Fire, Snow, Grass 모두에서 사용하게 끔 만들기
import React from "react";
import Water from "../components/contents/Water";
import { connect } from "react-redux";
import { click } from "../modules/contents";

const WaterContainer = ({ id, handleOnClick, isClicked }) => {
  return <Water id={id} handleOnClick={handleOnClick} isClicked={isClicked} />;
};

const mapStateToProps = (state) => ({
  id: state.contents.id,
  isClicked: state.hamburger.isClicked,
});

const mapDispatchToProps = (dispatch, props) => ({
  handleOnClick: (e) => {
    // 각 영상 아이디 얻어냄
    const id = e.target.attributes.value.value;
    // console.log("🚀 ~ file: ContentsContainer.js ~ line 23 ~ id", id);
    dispatch(click(id));
    props.history.push("/watch");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WaterContainer);
