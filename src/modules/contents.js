const GOTOCONTENTSPAGE = "contents/GOTOCONTENTSPAGE";
const GOTOANOTHERPAGE = "contents/GOTOANOTHERPAGE";

export const goToContentsPage = () => ({
  type: GOTOCONTENTSPAGE,
});
export const goToAnotherPage = () => ({
  type: GOTOANOTHERPAGE,
});

const initialState = {
  isContentsPage: false,
};

function contents(state = initialState, action) {
  switch (action.type) {
    case GOTOCONTENTSPAGE:
      return {
        ...state,
        isContentsPage: true,
      };
    case GOTOANOTHERPAGE:
      return {
        ...state,
        isContentsPage: false,
      };
    default:
      return state;
  }
}
export default contents;
