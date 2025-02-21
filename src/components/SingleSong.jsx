import { Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToLibraryAction, selectSongAction } from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";

const SingleSong = (props) => {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.library.content);
  const inLibrary = library.map((song) => song.id).includes(props.song.id);
  return (
    <Col
      className="text-center song mb-5"
      onClick={() => {
        dispatch(selectSongAction(props.song));
      }}
    >
      <Image fluid src={props.song.album.cover_medium} alt="track" />
      <p className="mb-1">
        Track: {props.song.title_short}
        <br />
        Artist: {props.song.artist.name}
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
