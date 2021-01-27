// action
const OPENMDODAL = "modal/OPENMDODAL";
const CLOSEMODAL = "modal/CLOSEMODAL";
const TOOGLEMODAL = "modal/TOOGLEMODAL";

// action creator
// export const setIsClicked = () => ({ type: OPENMDODAL });
export const openModal = () => ({ type: OPENMDODAL });
export const closeModal = () => ({ type: CLOSEMODAL });
export const toggleModal = () => ({ type: TOOGLEMODAL });

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
    case TOOGLEMODAL:
      return {
        ...state,
        isModalClicked: !state.isModalClicked,
      };
    default:
      return state;
  }
}
export default modal;
