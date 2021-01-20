import React from "react";
import Profile from "../components/contents/Profile";
import { connect } from "react-redux";
import {
  clickedNameBtn,
  clickedPasswordBtn,
  changedName,
  changedPassword,
} from "../modules/profile";

const ProfileContainer = ({
  // 액션
  isClickedChangeNameBtn,
  isClickedChangePasswordBtn,
  name,
  password,
  // 액션 생성 함수
  handleOnClickNameBtn,
  handleOnClickPasswordBtn,
  hadleOnChangeName,
  hadleOnChangePassword,
}) => {
  return (
    <Profile
      isClickedChangeNameBtn={isClickedChangeNameBtn}
      isClickedChangePasswordBtn={isClickedChangePasswordBtn}
      name={name}
      password={password}
      handleOnClickNameBtn={handleOnClickNameBtn}
      handleOnClickPasswordBtn={handleOnClickPasswordBtn}
      hadleOnChangeName={hadleOnChangeName}
      hadleOnChangePassword={hadleOnChangePassword}
    />
  );
};

const mapStateToProps = (state) => ({
  isClickedChangeNameBtn: state.profile.isClickedChangeNameBtn,
  isClickedChangePasswordBtn: state.profile.isClickedChangePasswordBtn,
  name: state.profile.name,
  password: state.profile.password,
});

const mapDispatchToProps = (dispatch) => ({
  // 이름 변경 버튼
  handleOnClickNameBtn: () => {
    console.log("clicked handleOnClickNameBtn");
    dispatch(clickedNameBtn());
  },
  // 비밀번호 변경 버튼
  handleOnClickPasswordBtn: () => {
    console.log("clicked handleOnClickPasswordBtn ");
    dispatch(clickedPasswordBtn());
  },
  // 이름 텍스트 변경 // 한 글자 바뀌면 바로 디스패치 되는 문제 발생.
  hadleOnChangeName: (e) => {
    console.log("e.target.value>>>", e.target.value);
    dispatch(changedName(e));
    e.preventDefault();
  },
  // 비밀번호 텍스트 변경 // 한 글자 바뀌면 바로 디스패치 되는 문제 발생.
  hadleOnChangePassword: (e) => {
    console.log("e.target.value>>>", e.target.value);
    dispatch(changedPassword(e));
    e.preventDefault();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
