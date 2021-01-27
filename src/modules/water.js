// 0. 뷰 -> 리덕스 순서 1. 오리 키우기 -> 2. 엄마 캥거루가 챙김 -> 3. 아기 캥거루에게 전달

// Ducks
//오리 1
// 액션 타입 정의 : '모듈 이름/액션 이름' 형태로 작성, 액션 이름 충돌 방지
const CLICKTHUMBNAIL = "water/CLICKTHUMBNAIL";
const ADDFAVORITES = "water/ADDFAVORITES";

//오리 2
// 액션 생성 함수 만들기
export const clickThumbnail = (payload) => ({ type: CLICKTHUMBNAIL, payload });
export const addFavorites = (payload) => ({ type: ADDFAVORITES, payload });

//오리 3
// 초기 상태
const initialState = {
  id: null,
  isAddFavoirtes: false,
};

// 리듀서
function contents(state = initialState, action) {
  switch (action.type) {
    case CLICKTHUMBNAIL:
      return {
        ...state,
        id: action.payload,
      };
    case ADDFAVORITES:
      return {
        ...state,
        isAddFavoirtes: !state.isAddFavoirtes,
      };
    default:
      return state;
  }
}
export default contents;
