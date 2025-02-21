import { Col, Row } from "react-bootstrap";
import MusicSection from "./MusicSection";

const Main = () => {
  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage pt-5">
      <Row>
        <Col xs={10}>
          <MusicSection artistName="Katy Perry" />
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <MusicSection artistName="Queen" />
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <MusicSection artistName="Eminem" />
        </Col>
      </Row>
    </Col>
  );
};

export default Main;
