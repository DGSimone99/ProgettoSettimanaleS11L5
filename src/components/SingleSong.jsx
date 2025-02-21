import { Col, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectSongAction } from "../redux/actions";

const SingleSong = (props) => {
  const dispatch = useDispatch();
  return (
    <Col
      className="text-center"
      onClick={() => {
        dispatch(selectSongAction(props.song));
      }}
    >
      <Image fluid src={props.song.album.cover_medium} alt="track" />
      <p>
        Track: {props.song.title}
        <br />
        Artist: {props.song.artist.name}
      </p>
    </Col>
  );
};

export default SingleSong;
