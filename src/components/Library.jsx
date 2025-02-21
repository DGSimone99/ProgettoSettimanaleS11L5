import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SingleSong from "./SingleSong";
import { Link } from "react-router";
import { clearLibraryAction } from "../redux/actions";

const Library = () => {
  const library = useSelector((state) => state.library.content || []);
  const dispatch = useDispatch();
  return (
    <Col className="mainPage pt-5 h-100">
      {library.length > 0 ? (
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="text-white text-white ms-3">Your Library:</h1>
            <h4
              className="text-white underline-light"
              onClick={() => {
                dispatch(clearLibraryAction());
              }}
            >
              Clear Library
            </h4>
          </div>
          <Row xs={1} sm={2} lg={3} xl={6} className="imgLinks py-3">
            {library.map((song) => (
              <SingleSong key={song.id} song={song} />
            ))}
          </Row>
        </div>
      ) : (
        <div className="d-flex my-auto align-items-center justify-content-center text-center flex-column h-50">
          <h1 className="text-white">Nessuna canzone salvata nella tua libreria.</h1>
          <Button as={Link} to="/" className="bg-transparent border-white mt-5">
            Torna alla Home
          </Button>
        </div>
      )}
    </Col>
  );
};

export default Library;
