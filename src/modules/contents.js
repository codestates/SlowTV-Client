// 액션 타입 정의 : '모듈 이름/액션 이름' 형태로 작성, 액션 이름 충돌 방지
const CLICK = "contents/CLICK";

// 액션 생성 함수 만들기
export const click = (payload) => ({ type: CLICK, payload }); // "side/CLICK"

// 초기 상태
const initialState = {
  id: "initialState",
};

// 리듀서
function contents(state = initialState, action) {
  switch (action.type) {
    case CLICK:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
}
export default contents;
