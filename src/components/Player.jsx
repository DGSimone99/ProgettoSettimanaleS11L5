import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import Shuffle from "../assets/playerbuttons/shuffle.png";
import Prev from "../assets/playerbuttons/prev.png";
import Play from "../assets/playerbuttons/play.png";
import Next from "../assets/playerbuttons/next.png";
import Repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";

const Player = () => {
  const selectedSong = useSelector((state) => state.selectedSong.content);
  const durationPlayer = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return minutes + ":" + seconds.toString().padStart(2, "0");
  };

  return (
    <Container fluid className="position-fixed bg-container pt-1">
      <Row className="h-100">
        <Col lg={10}>
          <Row className="h-100 align-items-center">
            <Col xs={2} className="d-flex dataSong align-items-center">
              {selectedSong?.album?.cover_small && (
                <Image src={selectedSong.album.cover_small} alt="Cover" width={75} className="rounded-2"></Image>
              )}
              <div className="ms-2">
                <h2 className="text-white songName">{selectedSong?.title_short}</h2>
                <h3 className="text-white artistName">{selectedSong?.artist?.name}</h3>
              </div>
            </Col>
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex justify-content-between">
                <Nav.Link href="#">
                  <Image src={Shuffle} alt="shuffle" />
                </Nav.Link>
                <Nav.Link href="#">
                  <Image src={Prev} alt="prev" />
                </Nav.Link>
                <Nav.Link href="#">
                  <Image src={Play} alt="play" />
                </Nav.Link>
                <Nav.Link href="#">
                  <Image src={Next} alt="next" />
                </Nav.Link>
                <Nav.Link href="#">
                  <Image src={Repeat} alt="repeat" />
                </Nav.Link>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-1">
                <div className="text-white m-0">0:00</div>
                <div className="progress w-75">
                  <div role="progressbar"></div>
                </div>
                {selectedSong ? (
                  <div className="text-white  m-0">{durationPlayer(selectedSong?.duration)}</div>
                ) : (
                  <div className="text-white  m-0">0:00</div>
                )}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
