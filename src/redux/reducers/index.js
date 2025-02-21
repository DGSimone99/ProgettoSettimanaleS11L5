import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from "./songsReducer";
import selectSongReducer from "./selectSongReducer";
import searchSongReducer from "./searchSongReducer";
import libraryReducer from "./libraryReducer";

const rootReducer = combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
  search: searchSongReducer,
  library: libraryReducer,
});

export default rootReducer;
