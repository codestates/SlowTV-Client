// 액션 타입 정의
const CLICK = "hamburger/CLICK";

// 액션 생성 함수
export const click = () => ({ type: CLICK });

const initialState = {
  isClicked: false,
};

// 리듀서
function hamburger(state = initialState, action) {
  switch (action.type) {
    case CLICK:
      return {
        isClicked: !state.isClicked,
      };
    default:
      return state;
  }
}

export default hamburger;
