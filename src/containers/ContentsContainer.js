// ! 현재 사용 안함.
// 나중에 컨텐트 페이지에서 각 카테고리 대표 이미지(가운데 큰 티비 모양 카드) 클릭하면 해당 카테고리로 이동하게끔 만들기
import React from "react";
import Contents from "../components/Contents";
import { connect } from "react-redux";
import { click } from "../modules/contents";

const ContentsContainer = ({ id, handleOnClick, history }) => {
  return <Contents id={id} handleOnClick={handleOnClick} />;
};

const mapStateToProps = (state) => ({
  id: state.contents.id,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  // 나중에 컨텐트 페이지에서 각 카테고리 대표 이미지(가운데 큰 티비 모양 카드) 클릭하면 해당 카테고리로 이동하게끔 만들기
  handleOnClick: (e) => {
    const id = e.target.attributes.value.value;
    dispatch(click(id));
    history.push("/watch");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentsContainer);
