import { Col, Row } from "react-bootstrap";
import MusicSection from "./MusicSection";

const Main = () => {
  return (
    <Col className="mainPage pt-5 pe-5">
      <Row>
        <Col>
          <MusicSection artistName="Katy Perry" number="6" />
        </Col>
      </Row>
      <Row>
        <Col>
          <MusicSection artistName="Queen" number="6" />
        </Col>
      </Row>
      <Row>
        <Col>
          <MusicSection artistName="Eminem" number="6" />
        </Col>
      </Row>
    </Col>
  );
};

export default Main;
