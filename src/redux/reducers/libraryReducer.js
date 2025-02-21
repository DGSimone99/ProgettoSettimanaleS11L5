import { ADD_TO_LIBRARY, CLEAR_LIBRARY, REMOVE_FROM_LIBRARY } from "../actions";

const initialState = {
  content: [],
};

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIBRARY:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FROM_LIBRARY:
      return {
        ...state,
        content: state.content.filter((song) => song.id !== action.payload),
      };

    case CLEAR_LIBRARY:
      return {
        ...state,
        content: [],
      };

    default:
      return state;
  }
};

export default libraryReducer;
