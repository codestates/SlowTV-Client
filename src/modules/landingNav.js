// action -> dispatch

// 랜딩페이지 네브 바에서 "Sign In" 버튼 클릭 시 -> 로그인 페이지에서 Sign In먼저 보이게 만듦
const CLICKNAVSIGNINBTN = "landingNav/CLICKNAVSIGNINBTN";
// 위와 반대
const CLICKNAVSIGNUPBTN = "landingNav/CLICKNAVSIGNUPBTN";

// action creator -> container
export const clickNavSignInBtn = () => ({ type: CLICKNAVSIGNINBTN });
export const clickNavSIgnUpBtn = () => ({ type: CLICKNAVSIGNUPBTN });

// state, reducer
const initialState = {
  isClickedNavSignInBtn: false,
};

function landingNav(state = initialState, action) {
  switch (action.type) {
    case CLICKNAVSIGNINBTN:
      return {
        ...state,
        isClickedNavSignInBtn: true,
      };
    case CLICKNAVSIGNUPBTN:
      return {
        ...state,
        isClickedNavSignInBtn: false,
      };
    default:
      return state;
  }
}
export default landingNav;
