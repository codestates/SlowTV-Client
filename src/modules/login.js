// redux-actions : 액션 생성 함수 쉽게 만듦, 리듀서도 switch문 안쓰고 handleActions 함수로 대체
// 추후 리팩토링
// import { createAction, handleActions } from "redux-actions";

// 액션 타입 정의 : '모듈 이름/액션 이름' 형태로 작성, 액션 이름 충돌 방지
// ! 로그인 페이지에서 회원가입 -> 로그인으로 상태 변경
const CHANGESIGNIN = "login/CHANGESIGNIN";
// ! 로그인 페이지에서 로그인 -> 회원가입으로 상태 변경
const CHANGESIGNUP = "login/CHANGESIGNUP";
// ! 로그인 버튼 클릭 -> 서버에 쏨
const CLICKSIGNIN = "login/CLICKSIGNIN";
// ! 깃허브 엑세스 토큰 업데이트
const GETGITHUBACCESSTOKEN = "login/GETGITHUBACCESSTOKEN";
// ! 구글 엑세스 토큰 업데이트
const GETGOOGLEACCESSTOKEN = "login/GETGOOGLEACCESSTOKEN";
// ! 로그아웃 -> 서버 쏨
const CLICKLOGOUT = "login/CLICKLOGOUT";
// ! 유저 정보 업데이트
// ! 이메일 변경
const CHANGEMAIL = "profile/CHANGEMAIL";
// ! 닉네임 변경
const CHANGENICKNAME = "profile/CHANGENICKNAME";
// ! 패스워드 변경
// const CHANGEPASSWORD = "profile/CHANGEPASSWORD";

// ! 액션 생성 함수 -> 컨테이너 컴포넌트에서 사용
// redux-actions => createAction(액션명) 사용 가능
// export const changeSignIn = createAction(CHANGESIGNIN);
// export const changeSignUp = createAction(CHANGESIGNIN);

export const changeSignIn = () => ({ type: CHANGESIGNIN });
export const changeSignUp = () => ({ type: CHANGESIGNUP });
export const clickSignIn = () => ({ type: CLICKSIGNIN });
export const getGithubAccessToken = (payload) => ({
  type: GETGITHUBACCESSTOKEN,
  payload,
});
export const getGoogleAccessToken = (payload) => ({
  type: GETGOOGLEACCESSTOKEN,
  payload,
});
export const clickLogout = () => ({ type: CLICKLOGOUT });
export const changeEmail = (payload) => ({ type: CHANGEMAIL, payload });
export const changeNickName = (payload) => ({ type: CHANGENICKNAME, payload });
// export const changePassword = (payload) => ({ type: CHANGEPASSWORD, payload });

// 오리 3
// 초기 상태
const initialState = {
  // ! 로그인 페이지에서 회원가입 <-> 로그인으로 상태 변경
  isClickedSignInBtn: true,
  // ! 로그인 유무
  isLoggedIn: false,
  // ! 엑세스 토큰
  githubAccessToken: null,
  googleAccessToken: null,
  // ! 유저 정보
  // !이메일
  email: null,
  // ! 닉네임
  nickname: null,
  // ! 패스워드
  // password:null,
};

// ! 리듀서 -> src/modules/index.js에서 루트 리듀서 만듦 -> src/index.js에서 스토어에 루트 리듀서 넣음
// redux-actions => handleActions(업데이트 함수, 초기 상태)

function login(state = initialState, action) {
  switch (action.type) {
    case CHANGESIGNIN:
      return {
        ...state,
        isClickedSignInBtn: true,
      };
    case CHANGESIGNUP:
      return {
        ...state,
        isClickedSignInBtn: false,
      };
    case CLICKSIGNIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case CLICKLOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case GETGITHUBACCESSTOKEN:
      return {
        ...state,
        githubAccessToken: action.payload,
      };
    case GETGOOGLEACCESSTOKEN:
      return {
        ...state,
        googleAccessToken: action.payload,
      };
    case CHANGEMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case CHANGENICKNAME:
      return {
        ...state,
        nickname: action.payload,
      };
    // case CHANGEPASSWORD:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
}
export default login;

// const login = handleActions(
//   {
//     // 액션에 따라 다른 로직 실행
//     // [액션명] : (상태, 액션) => ({업데이트 할 상태 로직})
//     [CHANGESIGNIN]: (state, action) => ({ isClickedSignInBtn: true }),
//     [CHANGESIGNUP]: (state, action) => ({ isClickedSignInBtn: false }),
//   },
//   {
//     initialState,
//   }
// );
