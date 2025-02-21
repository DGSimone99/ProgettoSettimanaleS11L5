import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "./songsReducer";
import selectSongReducer from "./selectSongReducer";

const rootReducer = combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});

export default rootReducer;
