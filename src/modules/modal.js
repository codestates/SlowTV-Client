// action
const OPENMDODAL = "modal/OPENMDODAL";
const CLOSEMODAL = "modal/CLOSEMODAL";

// action creator
// export const setIsClicked = () => ({ type: OPENMDODAL });
export const openModal = () => ({ type: OPENMDODAL });
export const closeModal = () => ({ type: CLOSEMODAL });

// state, reducer
const initialState = {
  isModalClicked: false,
};

function modal(state = initialState, action) {
  switch (action.type) {
    case OPENMDODAL:
      return {
        ...state,
        isModalClicked: true,
      };
    case CLOSEMODAL:
      return {
        ...state,
        isModalClicked: false,
      };
    default:
      return state;
  }
}
export default modal;
