import { Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToLibraryAction, searchSongAction, selectSongAction } from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";

const SingleSong = (props) => {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.library.content);
  const inLibrary = library.map((song) => song.id).includes(props.song.id);
  return (
    <Col className="text-center song mb-5">
      <Image
        fluid
        src={props.song.album.cover_medium}
        alt="track"
        onClick={() => {
          dispatch(selectSongAction(props.song));
        }}
        className="imgSong"
      />
      <p
        className="mb-0 titleSong"
        onClick={() => {
          dispatch(selectSongAction(props.song));
        }}
      >
        {props.song.title_short}
      </p>
      <p
        className="py-1 mb-0 fw-normal artistSong"
        onClick={() => {
          dispatch(searchSongAction(props.song.artist.name));
        }}
      >
        {props.song.artist.name}
      </p>

      {inLibrary ? (
        <HeartFill
          onClick={() => {
            dispatch(addToLibraryAction(props.song));
          }}
          className="text-white fs-5 mt-2"
        ></HeartFill>
      ) : (
        <Heart
          onClick={() => {
            dispatch(addToLibraryAction(props.song));
          }}
          className="text-white fs-5 mt-2"
        ></Heart>
      )}
    </Col>
  );
};

export default SingleSong;
