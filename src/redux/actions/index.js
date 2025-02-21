export const SET_SONGS = "SET_SONGS";
export const SELECT_SONG = "SELECT_SONG";
export const SEARCH_SONG = "SEARCH_SONG";
export const ADD_TO_LIBRARY = "ADD_TO_LIBRARY";
export const REMOVE_FROM_LIBRARY = "REMOVE_FROM_LIBRARY";
export const CLEAR_LIBRARY = "CLEAR_LIBRARY";

export const getSongsAction = (artistName) => {
  return async (dispatch) => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (resp.ok) {
        let fetchedSongs = await resp.json();
        console.log(fetchedSongs);
        dispatch({ type: SET_SONGS, payload: fetchedSongs.data, artistName: artistName });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToLibraryAction = (librarySong) => {
  return (dispatch, getState) => {
    const currentState = getState();
    const foundIndex = currentState.library.content.findIndex((song) => song.id === librarySong.id);
    if (foundIndex === -1) {
      dispatch({ type: ADD_TO_LIBRARY, payload: librarySong });
    } else {
      dispatch({ type: REMOVE_FROM_LIBRARY, payload: librarySong.id });
    }
  };
};

export const removeFromLibraryAction = (songId) => ({ type: REMOVE_FROM_LIBRARY, payload: songId });

export const selectSongAction = (song) => ({ type: SELECT_SONG, payload: song });
export const searchSongAction = (song) => ({ type: SEARCH_SONG, payload: song });

export const clearLibraryAction = () => ({ type: CLEAR_LIBRARY });
