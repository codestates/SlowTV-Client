// Ducks
//오리 1
// 액션 타입 정의 : '모듈 이름/액션 이름' 형태로 작성, 액션 이름 충돌 방지
const CLICKCATEGORY = "contents/CATEGORY";
const CLICKREMOTECONTROL = "sideRemoteControl/CLICKREMOTECONTROL";

//오리 2
// 액션 생성 함수 만들기

export const clickCategory = (payload) => ({ type: CLICKCATEGORY, payload });
export const clickRemoteControl = () => ({ type: CLICKREMOTECONTROL });

//오리 3
// 초기 상태
const initialState = {
  videoData: null,
  favorites: null,
  isRemoteControlOn: false,
};

// 리듀서
function contents(state = initialState, action) {
  switch (action.type) {
    case CLICKCATEGORY:
      return {
        ...state,
        videoData: action.payload,
      };
    case CLICKREMOTECONTROL:
      return {
        ...state,
        isRemoteControlOn: !state.isRemoteControlOn,
      };
    default:
      return state;
  }
}
export default contents;
