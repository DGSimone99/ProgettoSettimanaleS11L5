import { SEARCH_SONG } from "../actions";

const initialState = {
  content: null,
};
const searchSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SONG:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default searchSongReducer;
