// 액션 타입 정의 : '모듈 이름/액션 이름' 형태로 작성, 액션 이름 충돌 방지
const CHANGENAMEBTN = "profile/CHANGENAMEBTN";
const CHANGEPASSWORDBTN = "profile/CHANGEPASSWORDBTN";
const CHANGENAME = "profile/CHANGENAME";
const CHANGEPASSWORD = "profile/CHANGEPASSWORD";

// 액션 생성 함수 만들기
// 버튼 클릭
export const clickedNameBtn = () => ({ type: CHANGENAMEBTN });
export const clickedPasswordBtn = () => ({ type: CHANGEPASSWORDBTN });
// 텍스트 변경
export const changedName = (e) => ({
  type: CHANGENAME,
  payload: e.target.value,
});
export const changedPassword = (e) => ({
  type: CHANGEPASSWORD,
  payload: e.target.value,
});

// 초기 상태
const initialState = {
  isClickedChangeNameBtn: false,
  isClickedChangePasswordBtn: false,
  name: "testname",
  password: "testpw",
};

// 리듀서
function profile(state = initialState, action) {
  switch (action.type) {
    case CHANGENAMEBTN:
      return {
        isClickedChangeNameBtn: !state.isClickedChangeNameBtn,
      };
    case CHANGEPASSWORDBTN:
      return {
        isClickedChangePasswordBtn: !state.isClickedChangePasswordBtn,
      };
    case CHANGENAME:
      return {
        name: action.payload,
      };
    case CHANGEPASSWORD:
      return {
        password: action.payload,
      };
    default:
      return state;
  }
}

export default profile;
