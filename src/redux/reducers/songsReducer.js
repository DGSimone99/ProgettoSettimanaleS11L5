import { SET_SONGS } from "../actions";

const initialState = {
  content: {},
};
const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        content: { ...state.content, [action.artistName]: action.payload },
      };

    default:
      return state;
  }
};

export default songsReducer;
