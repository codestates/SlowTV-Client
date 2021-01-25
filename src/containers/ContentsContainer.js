// ! 현재 사용 안함.
// 나중에 컨텐트 페이지에서 각 카테고리 대표 이미지(가운데 큰 티비 모양 카드) 클릭하면 해당 카테고리로 이동하게끔 만들기
import React from "react";
import Contents from "../components/Contents";
import { connect } from "react-redux";

const ContentsContainer = ({ isLoggedIn, isModalClicked }) => {
  return <Contents isLoggedIn={isLoggedIn} isModalClicked={isModalClicked} />;
};

const mapStateToProps = (state) => ({
  id: state.water.id,
  isLoggedIn: state.login.isLoggedIn,
  isModalClicked: state.modal.isModalClicked,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  // 나중에 컨텐트 페이지에서 각 카테고리 대표 이미지(가운데 큰 티비 모양 카드) 클릭하면 해당 카테고리로 이동하게끔 만들기
  // handleOnClick: (e) => {
  //   const id = e.target.attributes.value.value;
  //   dispatch(clickThumbnail(id));
  //   history.push("/watch");
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentsContainer);
