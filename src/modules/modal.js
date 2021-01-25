// action
const CLICK = "modal/CLICK";

// action creator
export const setIsClicked = () => ({ type: CLICK });

// state, reducer
const initialState = {
  isModalClicked: false,
};

function modal(state = initialState, action) {
  switch (action.type) {
    case CLICK:
      return {
        isModalClicked: !state.isModalClicked,
      };
    default:
      return state;
  }
}
export default modal;
