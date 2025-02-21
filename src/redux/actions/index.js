export const SET_SONGS = "SET_SONGS";
export const SELECT_SONG = "SELECT_SONG";
export const SEARCH_SONG = "SEARCH_SONG";

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

export const selectSongAction = (song) => ({ type: SELECT_SONG, payload: song });
export const searchSongAction = (song) => ({ type: SEARCH_SONG, payload: song });
