import { useDispatch, useSelector } from "react-redux";
import SingleSong from "./SingleSong";
import { useEffect } from "react";
import { getSongsAction } from "../redux/actions";
import { Row } from "react-bootstrap";

const MusicSection = (props) => {
  const songs = useSelector((state) => state.songs.content[props.artistName] || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsAction(props.artistName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return songs.length > 0 ? (
    <div>
      <h2 className="text-white ms-3">{props.artistName}</h2>
      <Row xs={1} sm={2} lg={3} xl={6} className="imgLinks py-3">
        {songs.slice(0, props.number).map((song) => (
          <SingleSong key={song.id} song={song} />
        ))}
      </Row>
    </div>
  ) : (
    <h2 className="text-white ms-3">Nessuna canzone trovata</h2>
  );
};

export default MusicSection;
