import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "./songsReducer";
import selectSongReducer from "./selectSongReducer";
import searchSongReducer from "./searchSongReducer";

const rootReducer = combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
  search: searchSongReducer,
});

export default rootReducer;
